import express from "express";
import path from "path"; // <- Make sure this is added
import { fileURLToPath } from "url";
import fs from "fs";
import multer from "multer";

import { pool, sql } from "./db-connection.js";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../')));
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.redirect("/pages/index.html");
});

app.get("/api/fish", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT 
        fs.CommonName, 
        fs.ScientificName, 
        fs.Description, 
        fs.ImagePath, 
        fs.Location, 
        r.Name AS RegionName,
        c.FirstName,
        c.LastName,
        c.Email
      FROM FishSpecies fs
      LEFT JOIN Region r ON fs.RegionID = r.RegionID
      LEFT JOIN Submissions s ON fs.SpeciesID = s.SpeciesID
      LEFT JOIN Contributors c ON s.ContributorID = c.ContributorID
    `);
    console.log(result.recordset);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching fish:", err);
    res.status(500).send("Server Error");
  }
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/api/submit-discovery', upload.array('photos', 3), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      fishName,
      scientificName,
      location,
      region,
      description,
      additionalInfo
    } = req.body;

    const imagePaths = req.files.map(file => `/uploads/${file.filename}`).join(',');

    const sqlRequest = pool.request();

    // Insert into Contributors table
    const contributorResult = await sqlRequest
      .input('FirstName', firstName)
      .input('LastName', lastName)
      .input('Email', email)
      .query(`
        INSERT INTO Contributors (FirstName, LastName, Email)
        OUTPUT INSERTED.ContributorID
        VALUES (@FirstName, @LastName, @Email)
      `);
    const contributorId = contributorResult.recordset[0].ContributorID;

    // Insert into FishSpecies table
    const fishResult = await sqlRequest
      .input('CommonName', fishName)
      .input('ScientificName', scientificName) // You may parse this from fishName if needed
      .input('Description', description)
      .input('ImagePath', imagePaths)
      .input('Location', location)
      .input('RegionID', region)
      .input('AdditionalDetails', additionalInfo || '')
      .query(`
        INSERT INTO FishSpecies (CommonName, ScientificName, Description, ImagePath, Location, RegionID, AdditionalDetails)
        OUTPUT INSERTED.SpeciesID
        VALUES (@CommonName, @ScientificName, @Description, @ImagePath, @Location, @RegionID, @AdditionalDetails)
      `);
    const speciesId = fishResult.recordset[0].SpeciesID;

    // Insert into Submissions table
    await sqlRequest
      .input('SpeciesID', speciesId)
      .input('ContributorID', contributorId)
      .input('SubmissionDate', new Date())
      .input('Status', 'Pending')
      .query(`
        INSERT INTO Submissions (SpeciesID, ContributorID, SubmissionDate, Status)
        VALUES (@SpeciesID, @ContributorID, @SubmissionDate, @Status)
      `);

    res.status(200).json({ message: "Discovery submitted successfully!" });
  } catch (err) {
    console.error("Submission error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.get('/api/admin/submissions', async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT 
        s.SubmissionID,
        c.FirstName,
        c.LastName,
        c.Email,
        fs.CommonName AS FishName,
        fs.ScientificName,
        fs.Description,
        fs.Location,
        fs.ImagePath,
        fs.AdditionalDetails
      FROM Submissions s
      JOIN Contributors c ON s.ContributorID = c.ContributorID
      JOIN FishSpecies fs ON s.SpeciesID = fs.SpeciesID
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).send('Error fetching submissions');
  }
});


app.delete('/api/admin/submissions/:id', async (req, res) => {
  const submissionId = req.params.id;

  try {
    // 1. Get the SpeciesID from the submission
    const result = await pool.request()
      .input('id', sql.Int, submissionId)
      .query(`SELECT SpeciesID FROM Submissions WHERE SubmissionID = @id`);

    if (result.recordset.length === 0) {
      return res.status(404).send('Submission not found');
    }

    const speciesId = result.recordset[0].SpeciesID;

    // 2. Delete from Submissions
    await pool.request()
      .input('id', sql.Int, submissionId)
      .query(`DELETE FROM Submissions WHERE SubmissionID = @id`);

    // 3. Delete from FishSpecies
    await pool.request()
      .input('sid', sql.Int, speciesId)
      .query(`DELETE FROM FishSpecies WHERE SpeciesID = @sid`);

    res.status(200).send('Submission and associated fish deleted');
  } catch (err) {
    console.error('Error deleting submission and fish:', err);
    res.status(500).send('Failed to delete');
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

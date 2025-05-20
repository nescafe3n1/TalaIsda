const express = require('express');
const { sql, connectToDatabase } = require('./dbConfig'); // adjust path as needed

const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json());

app.get('/', (req, res) => {
  res.send('🌊 TalaIsda API is running');
});

app.get('/api/fish', async (req, res) => {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM FishSpecies');
    res.json(result.recordset); // send to frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

const upload = multer({ dest: 'uploads/' }); // stores in /uploads

app.post('/api/submit-discovery', upload.array('photos', 3), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      fishName,
      location,
      region,
      description,
      additionalInfo
    } = req.body;

    const pool = await connectToDatabase();

    // Insert contributor
    const contributorResult = await pool.request()
      .input('FirstName', firstName)
      .input('LastName', lastName)
      .input('Email', email)
      .query(`
        INSERT INTO Contributors (FirstName, LastName, Email)
        OUTPUT INSERTED.ContributorID
        VALUES (@FirstName, @LastName, @Email)
      `);

    const contributorId = contributorResult.recordset[0].ContributorID;

    // Insert fish species (optional details like photo skipped for now)
    const speciesResult = await pool.request()
      .input('CommonName', fishName)
      .input('ScientificName', '') // blank if unknown
      .input('Description', description)
      .input('ImagePath', '') // you can update this to store photo path
      .input('Location', location)
      .input('RegionID', region) // make sure region exists
      .input('AdditionalDetails', additionalInfo)
      .query(`
        INSERT INTO FishSpecies (CommonName, ScientificName, Description, ImagePath, Location, RegionID, AdditionalDetails)
        OUTPUT INSERTED.SpeciesID
        VALUES (@CommonName, @ScientificName, @Description, @ImagePath, @Location, @RegionID, @AdditionalDetails)
      `);

    const speciesId = speciesResult.recordset[0].SpeciesID;

    // Insert submission record
    await pool.request()
      .input('SpeciesID', speciesId)
      .input('ContributorID', contributorId)
      .input('SubmissionDate', new Date())
      .input('Status', 'Pending')
      .input('AdminID', null) // not assigned yet
      .query(`
        INSERT INTO Submissions (SpeciesID, ContributorID, SubmissionDate, Status, AdminID)
        VALUES (@SpeciesID, @ContributorID, @SubmissionDate, @Status, @AdminID)
      `);

    res.status(200).send('✅ Submission received and stored in database!');
  } catch (err) {
    console.error('❌ Submission Error:', err);
    res.status(500).send('Error processing submission');
  }
});

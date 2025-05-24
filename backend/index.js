// backend/index.js
import express from "express";
import path from "path"; // <- Make sure this is added
import { fileURLToPath } from "url";

import { pool } from "./db-connection.js";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve frontend files correctly
app.use(express.static(path.join(__dirname, '../')));
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.redirect("/pages/index.html");
});

// ✅ Unified and Correct /api/fish endpoint
app.get("/api/fish", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT 
        fs.CommonName, 
        fs.ScientificName, 
        fs.Description, 
        fs.ImagePath, 
        fs.Location, 
        r.Name AS RegionName
      FROM FishSpecies fs
      LEFT JOIN Region r ON fs.RegionID = r.RegionID
    `);
    console.log(result.recordset);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching fish:", err);
    res.status(500).send("Server Error");
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

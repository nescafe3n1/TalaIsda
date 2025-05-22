import express from "express";
import { pool } from "./db-connection.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TalaIsda API is running ✅');
});

app.get("/api/fish", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM FishSpecies");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("Error fetching fish data: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

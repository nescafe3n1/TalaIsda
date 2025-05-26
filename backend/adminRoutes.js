// backend/adminRoutes.js
import express from "express";
import { pool } from "./db-connection.js";

const router = express.Router();

// 1. Get all pending submissions
router.get("/pending", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT 
        s.SubmissionID,
        fs.CommonName,
        fs.ScientificName,
        fs.Description,
        fs.ImagePath,
        fs.Location,
        r.Name AS Region,
        c.FirstName,
        c.LastName,
        c.Email,
        s.SubmissionDate
      FROM Submissions s
      JOIN FishSpecies fs ON s.SpeciesID = fs.SpeciesID
      JOIN Region r ON fs.RegionID = r.RegionID
      JOIN Contributors c ON s.ContributorID = c.ContributorID
      WHERE s.Status = 'Pending'
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("❌ Error fetching pending submissions:", err);
    res.status(500).send("Server Error");
  }
});

// 2. Approve submission
app.post('/api/admin/approve/:submissionId', async (req, res) => {
  const { submissionId } = req.params;

  try {
    await pool.request()
      .input('status', sql.NVarChar, 'Approved')
      .input('id', sql.Int, submissionId)
      .query('UPDATE Submissions SET Status = @status WHERE SubmissionID = @id');

    res.status(200).json({ message: 'Submission approved' });
  } catch (err) {
    console.error('Approval error:', err);
    res.status(500).send('Failed to approve submission');
  }
});


// 3. Delete submission
app.delete('/api/admin/delete/:submissionId', async (req, res) => {
  const { submissionId } = req.params;

  try {
    await pool.request()
      .input('id', sql.Int, submissionId)
      .query('DELETE FROM Submissions WHERE SubmissionID = @id');

    res.status(200).json({ message: 'Submission deleted' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).send('Failed to delete submission');
  }
});


export default router;

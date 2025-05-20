const sql = require('mssql');

const config = {
  server: 'localhost',
  database: 'TalaIsdaDB', // Use your database name here
  options: {
    trustServerCertificate: true // required for self-signed certificates
  }
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('✅ Connected to MS SQL Server');
    return pool;
  } catch (err) {
    console.error('DB Connection Error:', err);
  }
}

module.exports = { sql, connectToDatabase };

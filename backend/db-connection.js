// db-connection.js
import sql from "mssql/msnodesqlv8.js";

const config = {
  driver: "msnodesqlv8",
  connectionString:
    "Driver={ODBC Driver 17 for SQL Server};Server=localhost;Database=TalaIsdaDB;Trusted_Connection=yes;TrustServerCertificate=yes;"
};

let pool;

try {
  pool = await sql.connect(config);
  console.log("✅ Connected to SQL Server");
} catch (err) {
  console.error("❌ Connection failed:", err.message);
}

export { pool, sql };

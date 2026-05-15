const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.post("/api/register-interest", (req, res) => {
  const { name, email, organisation, course_interest } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: "Name and email are required." });
  }

  try {
    const stmt = db.prepare(
      "INSERT INTO registrations (name, email, organisation, course_interest) VALUES (?, ?, ?, ?)"
    );
    const result = stmt.run(name, email, organisation || null, course_interest || null);
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Database error." });
  }
});

app.get("/api/registrations", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM registrations ORDER BY created_at DESC").all();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error." });
  }
});

app.listen(PORT, () => {
  console.log(`UnBound LMS backend running at http://localhost:${PORT}`);
});

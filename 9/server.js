const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const logPath = path.join(__dirname, "logs", "app.log");

// Ensure log directory exists
fs.mkdirSync(path.dirname(logPath), { recursive: true });

// Write to log file on every request
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFileSync(logPath, log);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js app with persistent logs!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

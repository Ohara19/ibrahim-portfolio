const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve HTML, CSS, JavaScript and images
app.use(express.static(path.join(__dirname, "public")));

// Test API route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Ibrahim's portfolio API is running!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});

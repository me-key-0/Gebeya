const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route

// Connect to MongoDB

// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

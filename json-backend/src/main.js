const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const data = require("./api/index");
require("dotenv").config();

// Create Express app
const app = express();

// Serve combined data using json-server middleware
app.use("/api", jsonServer.defaults(), jsonServer.router(data));

app.use(express.static(path.join(__dirname, "assets")));

// Define other routes or middleware as needed
app.get("/", (_, res) => {
  console.log(__dirname);
  res.sendFile("./node_modules/json-server/public/index.html");
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

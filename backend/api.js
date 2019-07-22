const express = require("express");
const app = new express();
app.use(express.json());
const cors = require("cors");

require("dotenv").config();

// middleware
app.use(cors());
app.use(require("./routes"));

module.exports = app;

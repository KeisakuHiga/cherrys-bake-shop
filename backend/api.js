const express = require("express");
const app = new express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

// middleware
app.use(cors());
app.use(require("./routes"));

module.exports = app;

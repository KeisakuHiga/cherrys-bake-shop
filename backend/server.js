const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = new express();
const cors = require("cors");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("not connected to db");
  } else {
    console.log("everything is ok!!");
  }
});

const usersRoutes = require('./routes/usersRoutes')
const port = process.env.PORT || 5000;
const User = require("./models/User");

// middleware
app.use(express.json())
app.use(cors())
app.use('/', usersRoutes)

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

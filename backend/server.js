const express = require("express")
const mongoose = require("mongoose")
const app = new express()
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("not connected to db")
  } else {
    console.log("everything is ok!!")
  }
})

const port = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(cors())
app.use(require('./routes'))

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

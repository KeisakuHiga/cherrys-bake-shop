const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = new express()
const port = process.env.PORT || 5000

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
  if(err) {
    console.log('not connected to db')
  } else {
    console.log('everything is ok!')
  }
})

app.get('/', (req, res) => {
  res.send('hello world from now.sh')
})

app.get('/hello', (req, res) => {
  res.send('hello!')
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

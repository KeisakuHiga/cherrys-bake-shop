const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
  if(err) {
    console.log('not connected to db')
  } else {
    console.log('everything is ok!')
  }
})

const app = new express()
const port = process.env.PORT || 5000
const User = require('./models/User')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world from now.sh')
})

app.post('/create-user', async (req, res) => {
  try {
    const { username, password } = req.body
    const newUser = new User({
      username: username,
      password: password
    })
    console.log(newUser)
    const savedUser = await newUser.save()
    res.status(200).send({savedUser})
  } catch (err) {
    res.status(400).send(err)
  }
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

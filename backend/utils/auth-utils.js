const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const faker = require('faker')

const User = require('../models/User')

const generateHash = async (password) => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

const checkPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

const generateUser = async (firstName, lastName, email, phoneNumber, password) => {
  const hash = await generateHash(password)
  const newUser = new User({
    userName: {
      firstName: firstName,
      lastName: lastName,
    },
    contact: {
      email: email,
      phoneNumber: phoneNumber
    },
    password: hash
  })
  return await newUser.save()
}

const generateAccessToken = ({ contact: { email } }) => {
  return jwt.sign({ contact: { email } }, process.env.JWT_SECRET, {expiresIn: '7d'})
} 

const checkAccessToken = (req, res, next) => {
  const { token } = req.headers
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('incorrect token')
    } else {
      req.user = decoded
      next()
    }
  })
}

const createFakeQuotes = (numberOfQuotes) => {
  let productTypes = [ 'standard cake', 'custom cake', 'cokkies', 'chocolate']
  let quotes = []
  for(i = 0; i < numberOfQuotes; i++){
    let randomNum = Math.floor(Math.random() * 4)
    let newQuote = {
      firstName: faker.random.words(),
      lastName: productTypes[randomNum],
      email: faker.name.findName(),
      phoneNumber: faker.name.findName(),
      typeOfProduct: faker.name.findName(),
      dateOfEvent: faker.name.findName(),
      typeOfOccasion: faker.name.findName(),
      pickUpDate: faker.name.findName(),
      pickUpTime: faker.name.findName(),
      numberOfGuests: faker.name.findName(),
      cakeFlavour: faker.name.findName(),
      fillingFlavour: faker.name.findName(),
      message: faker.name.findName(),

    }
    quotes.push(newQuote)
  }
  return quotes
}

module.exports = {
  checkPassword,
  generateUser,
  generateAccessToken,
  checkAccessToken,
  createFakeQuotes
}
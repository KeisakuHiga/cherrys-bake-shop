const User = require('../models/User')
const Quote = require('../models/Quote')
const ObjectId = require('mongoose').Types.ObjectId

const getAllQuotes = async (req, res) => {
  const allQuotes = await Quote.find().populate('user') 
  // console.log(allQuotes)
  // res.status(200).send({hello:'hello'})
  res.status(200).send(allQuotes)
}

const getOneQuote = async (req, res) => {
  try {
    const params = req.params
    const quote = await Quote.find(ObjectId(params.id)).populate('user') 
    if(!quote) {
      res.status(400).send(`Can not find by id #${params.id}`)
    } else {
      // console.log(quote)
      res.status(200).send(quote)
    }
  } catch(err) {
    res.send(`There is an err: ${err}`)
  }
}

const createNewQuote = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      typeOfProduct,
      dateOfEvent,
      typeOfOccasion,
      numberOfGuests,
      cakeFlavour,
      fillingFlavour,
      message
    } = req.body

    const newUser = await new User({
      userName: {
        firstName,
        lastName
      },
      contact: {
        email,
        phoneNumber
      },
      password
    })
    const savedUser = await newUser.save()
    console.log(savedUser)

    const newQuote = await new Quote({
      typeOfProduct,
      dateOfEvent,
      typeOfOccasion,
      numberOfGuests,
      cakeFlavour,
      fillingFlavour,
      message,
      user: savedUser._id
    })
    await newQuote.save()
    res.send(newQuote)

  }catch(err) {
    console.log(err)
    res.status(400).send(`There is an error ${err}`)
  }
}

module.exports = {
  getAllQuotes,
  getOneQuote,
  createNewQuote
}
const User = require('../models/User')
const Quote = require('../models/Quote')
const ObjectId = require('mongoose').Types.ObjectId
const Joi = require('@hapi/joi')

const validationSchema = Joi.object().keys({
  firstName: Joi.string()
    .alphanum()
    .required(),
  lastName: Joi.string()
    .alphanum()
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  phoneNumber: Joi.string()
    .min(10)
    .max(12)
    .required(),
  typeOfProduct:Joi.array()
    .items(Joi.string())
    .required(),
  dateOfEvent: Joi.date().greater('now')
    .required(),
  pickUpDate: Joi.date().greater('now'),
  pickUpTime: Joi.date().greater('now'),
  typeOfOccasion: Joi.string()
    .required(),
  numberOfGuests: Joi.number()
    .integer()
    .min(1)
    .required(),
  cakeFlavour: Joi.string()
    .required(),
  fillingFlavour: Joi.string()
    .required(),
  message: Joi.string()
    .required()
})

// related to Dashboard.js (front-end / GET request)
const getAllQuotes = async (req, res) => {
  const allQuotes = await Quote.find().populate('user') 
  res.status(200).send(allQuotes)
}

// related to quoteDetail.js (front-end / GET request)
const getOneQuote = async (req, res) => {
  try {
    const params = req.params
    const quote = await Quote.find(ObjectId(params.id)).populate('user') 
    if(!quote) {
      res.status(400).send(`Can not find by id #${params.id}`)
    } else {
      res.status(200).send(quote)
    }
  } catch(err) {
    res.send(`There is an err: ${err}`)
  }
}

// related to Quote.js (front-end / POST request)
const createNewQuote = async (req, res) => {
  try {
    await validationSchema.validate(req.body, { abortEarly: false })
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      typeOfProduct,
      dateOfEvent,
      typeOfOccasion,
      pickUpDate,
      pickUpTime,
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
      }
    })

    const savedUser = await newUser.save()

    const newQuote = await new Quote({
      typeOfProduct,
      dateOfEvent,
      pickUp: {
        date: pickUpDate,
        time: pickUpTime
      },
      typeOfOccasion,
      numberOfGuests,
      flavour: {
        cakeFlavour,
        fillingFlavour
      },
      message,
      user: savedUser._id
    })
    const savedQuote = await newQuote.save()

    res.send(savedQuote)
  } catch(validationError){
    const errorMessage = validationError.details.map(d => d.message)
    res.status(400).send(`Validation Error(s) => ${errorMessage}`)
  }
}

module.exports = {
  getAllQuotes,
  getOneQuote,
  createNewQuote
}
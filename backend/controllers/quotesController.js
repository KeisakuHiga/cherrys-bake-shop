const User = require('../models/User')
const Quote = require('../models/Quote')
const ObjectId = require('mongoose').Types.ObjectId
const Joi = require('@hapi/joi')

const validationSchema = Joi.object().keys({
  firstName: Joi.string()
    .required(),
  lastName: Joi.string()
    .required(),
  email: Joi.string()
    .email()
    .required(),
  phoneNumber: Joi.string()
    .required(),
  typeOfProduct: Joi.string()
    .required(),
  dateOfEvent: Joi.date().greater('now')
    .required(),
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

const getAllQuotes = async (req, res) => {
  const allQuotes = await Quote.find().populate('user') 
  res.status(200).send(allQuotes)
}

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

const createNewQuote = async (req, res) => {
  try {
    await validationSchema.validate(req.body, {abortEarly: false})
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
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
      }
    })

    const savedUser = await newUser.save()

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
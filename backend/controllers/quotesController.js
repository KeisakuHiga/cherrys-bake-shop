const User = require('../models/User')
const Quote = require('../models/Quote')
const ObjectId = require('mongoose').Types.ObjectId
const Joi = require('@hapi/joi')


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
  dateOfEvent: Joi.date()
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
    .required(),
  // user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const createNewQuote = async (req, res) => {
  try {
    Joi.validate(req.body, validationSchema, (err, value) => {
      // if err send err message
      if(err) {
        console.log('ERROR => ' + err.details[0].message)
        res.status(400).send(err)
      }
    })
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
    res.status(400).send(`There is an error ${err}`)
  }
}

module.exports = {
  getAllQuotes,
  getOneQuote,
  createNewQuote
}
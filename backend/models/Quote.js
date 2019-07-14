const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('@hapi/joi')

const quoteSchema = new Schema({
  typeOfProduct: String,
  dateOfEvent: Date,
  typeOfOccasion: String,
  numberOfGuests: Number,
  cakeFlavour: String,
  fillingFlavour: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const validateQuote = quote => {
  const schema = Joi.object().keys({
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
    createdAt: Joi.date()
      .required(),
    // user: { type: Schema.Types.ObjectId, ref: 'User' }
  })
  return Joi.validate(quote, schema)
}

const Quote =  mongoose.model('Quote', quoteSchema)
module.exports = {
  Quote,
  validateQuote
}

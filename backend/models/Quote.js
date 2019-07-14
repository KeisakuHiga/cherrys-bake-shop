const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const Joi = require('@hapi/joi')

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

// const validateQuote = quote => {
//   const schema = Joi.object().keys({
//     typeOfProduct: Joi.string()
//       .required(),
//     dateOfEvent: Joi.date()
//       .required(),
//     typeOfOccasion: Joi.string()
//       .required(),
//     numberOfGuests: Joi.number()
//       .integer()
//       .min(1)
//       .required(),
//     cakeFlavour: Joi.string()
//       .required(),
//     fillingFlavour: Joi.string()
//       .required(),
//     message: Joi.string()
//       .required(),
//     // user: { type: Schema.Types.ObjectId, ref: 'User' }
//   })
//   Joi.validate(quote, schema , (error, result) => {
//     if(error) {
//       console.log(error)
//       return error
//     }
//     console.log(result)
//     return result
//   })
// }

module.exports = mongoose.model('Quote', quoteSchema)

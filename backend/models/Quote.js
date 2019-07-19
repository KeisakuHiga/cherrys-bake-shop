const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema({
  typeOfProduct: [String],
  dateOfEvent: Date,
  pickUpDateAndTime: Date,
  typeOfOccasion: String,
  numberOfGuests: Number,
  flavour: {
    cakeFlavour: String,
    fillingFlavour: String
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Quote', quoteSchema)

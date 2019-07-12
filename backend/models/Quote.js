const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports =  mongoose.model('Quote', quoteSchema)

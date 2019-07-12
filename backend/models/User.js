const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
  },
  contact: {
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})

const orderSchema = new Schema({
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
  updatedAt: {
    type: Date,
    default: Date.now
  },
  userId: { type: Schema.Types.ObjectId, ref: 'Order' }
})


const User = mongoose.model('User', userSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  User,
  Order
}
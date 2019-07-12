const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  dateOfEvent: ISODate("2016-04-08T15:06:21.595Z"),
  eventType: "Lorem",
  pickUpOrDelivery: "Lorem",
  payment: false,
  deliveryAddress: "Lorem",
  numOfServingsRequired: -16,
  portionSize: "Lorem",
  designDescription: "Lorem",
  chosenFlavour: "Lorem",
  message: "Lorem",
  whereDidYouHeard: "Lorem",
  createdAt: ISODate("2016-04-08T15:06:21.595Z"),
  updatedAt": ISODate("2016-04-08T15:06:21.595Z")
})


const User = mongoose.model('User', userSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  User,
  Order
}
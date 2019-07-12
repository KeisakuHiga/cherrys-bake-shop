const { Order, User } = require('../models/User')

const hello = (req, res) => {
  res.send({
    hello: "hello! from user controller!"
  })
}

const getAllUsers = async (req, res) => {
  const foundUsers = await User.find()//.populate('orders') // 'orders' is the key from User model
  console.log(foundUsers)
  res.status(200).send(foundUsers)
}

module.exports = {
  hello,
  getAllUsers,
   // getOneUser,
  // createNewUser
}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')

const generateHash = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds)
}

const checkPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

const generateUser = async (username, password) => {
  const hash = await generateHash(password)
  const newUser = new User({
    username: username,
    password: hash
  })
  return await newUser.save()
}

const generateAccessToken = ({ username }) => {
  console.log('from GAT')
  console.log({ username })
  return jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: '7d'});
} 

module.exports = {
  checkPassword,
  generateUser,
  generateAccessToken
}
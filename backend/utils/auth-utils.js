const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const generateHash = async (password) => {
  const saltRounds = 10
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
  return jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: '7d'})
} 

const checkAccessToken = (req, res, next) => {
  const { token } = req.headers
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('incorrect token')
    } else {
      req.user = decoded
      next()
    }
  })
}
module.exports = {
  checkPassword,
  generateUser,
  generateAccessToken,
  checkAccessToken
}
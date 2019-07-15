const User = require('../models/User')
const { checkPassword, generateUser, generateAccessToken } = require('../utils/auth-utils.js')

const register = async (req, res) => {
  const { userName, contact, password } = req.body
  const { firstName, lastName } = userName
  const { email, phoneNumber } = contact
  if ( firstName && lastName && email && phoneNumber && password) {
    try {
      const query = await User.findOne({ 'contact.email': email})
      console.log(query)
      if (query === null) {
        const user = await generateUser(firstName, lastName, email, phoneNumber, password)
        const token = await generateAccessToken(user)
        return res.send({ token })
      } else {
        return res.status(403).send('user already exists')
      }
    } catch(err) {
      // console.log(err)
      return res.status(404).send('an error occurred')
    }
  } else {
    return res.status(403).send('incorrect credentials')
  }
}

const login = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  if (email && password) {
    try {
      const query = await User.findOne({ email: email })
      if (query !== null) {
        const result = await checkPassword(password, query.password)
        if (!result) {
          return res.status(403).send('incorrect credentials')
        } else {
          const token = await generateAccessToken(query)
          return res.send({ token })
        }
      } else {
        return res.status(403).send('incorrect credentials')
      }
    } catch(err) {
      return res.status(404).send('an error occurred' + err)
    }
  } else {
    return res.status(403).send('incorrect credentials')
  }
}

module.exports = {
  register,
  login
}
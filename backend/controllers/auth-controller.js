const User = require('../models/User')
const Joi = require('@hapi/joi')
const { checkPassword, generateUser, generateAccessToken } = require('../utils/auth-utils.js')

const validationSchema = Joi.object().keys({
  firstName: Joi.string()
    .alphanum()
    .required(),
  lastName: Joi.string()
    .alphanum()
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  phoneNumber: Joi.string()
    .min(10)
    .max(12)
    .required(),
  password: Joi.string()
    .min(8)
    .required()
})

const register = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body
  if ( firstName && lastName && email && phoneNumber && password) {
    try {
      await validationSchema.validate(req.body, {abortEarly: false})
      const query = await User.findOne({ 'contact.email': email })
      if (query === null) {
        const user = await generateUser(firstName, lastName, email, phoneNumber, password)
        const token = await generateAccessToken(user)
        return res.send({ token })
      } else {
        return res.status(403).send('The email you want to register already exists')
      }
    } catch(validationError){
      const errorMessage = validationError.details.map(d => d.message)
      res.status(400).send(`Validation Error(s) => ${errorMessage}`)
    }
  } else {
    return res.status(403).send('incorrect credentials')
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    try {
      const query = await User.findOne({ 'contact.email': email })
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
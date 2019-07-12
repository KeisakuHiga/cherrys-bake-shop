const User = require('../models/User')
const Quote = require('../models/Quote')

const getAllQuotes = async (req, res) => {
  // const allQuotes = await Quote.find().populate('users') 
  // console.log(allQuotes)
  res.status(200).send({hello:'hello'})
}

const getOneQuote = async (req, res) => {
  try {
    const recipeId = req.params
    // console.log(recipeId)
    const recipe = await Recipe.findOne(recipeId)
    if(!recipe) {
      res.status(400).send(`Can not find by id #${recipeId.id}`)
    } else {
      console.log(recipe)
      res.status(200).send(recipe)
    }
  } catch(err) {
    res.send(`There is an err: ${err}`)
  }
}

const createNewQuote = async (req, res) => {
  // console.log(req.body)
  try {
    const {
      // username,
      // contact,
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      typeOfProduct,
      dateOfEvent,
      typeOfOccasion,
      numberOfGuests,
      cakeFlavour,
      fillingFlavour,
      message
    } = req.body

    // const {
    //   email,
    //   phoneNumber
    // } = contact

    // const {
    //   firstName,
    //   lastName
    // } = username

    const newUser = await new User({
      userName: {
        firstName,
        lastName
      },
      contact: {
        email,
        phoneNumber
      },
      password
    })
    const savedUser = await newUser.save()
    console.log(savedUser)

    const newQuote = await new Quote({
      typeOfProduct,
      dateOfEvent,
      typeOfOccasion,
      numberOfGuests,
      cakeFlavour,
      fillingFlavour,
      message,
      userId: savedUser._id
    })
    await newQuote.save()
    res.send(newQuote)

  }catch(err) {
    console.log(err)
    res.status(400).send(`There is an error ${err}`)
  }
}

module.exports = {
  getAllQuotes,
  // getOneQuote,
  createNewQuote
}
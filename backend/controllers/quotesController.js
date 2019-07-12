const Quote = require('../models/Quote')

const getAllQuotes = async (req, res) => {
  const allQuotes = await Quote.find()//.populate('users') 
  console.log(allQuotes)
  res.status(200).send(allQuotes)
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
  try {
    const { 
      typeOfProduct,
      dateOfEvent,
      typeOfOccasion,
      numberOfGuests,
      cakeFlavour,
      fillingFlavour,
      message,
      createdAt,
      userId
    } = req.body

    const newQuote = await new Quote({
        
    })
    ingredients.map( async (ingredient) => {
      const newIngredient = await Ingredient.create({
        name: ingredient.name,
        volume: ingredient.volume
      })
      newQuote.ingredients.push(newIngredient._id)
    })
    await newQuote.save()
    res.send(newQuote)

    // let ingArray = []
    // const newRecipe =  new Recipe({
    //   name: name,
    //   ingredients: ingArray,
    //   methods: methods,
    //   img: img
    // })

    // ingredients.map( async ing => {
    //   const newIngredient = await Ingredient.create({ name: ing.name, volume: ing.volume })
    //   newRecipe.ingredients.push(newIngredient._id)
    // })
    
    // console.log(newRecipe.ingredients)
    // await newRecipe.save()
    // res.send(newRecipe)
    }catch(err) {
    res.status(400).send(`There is an error ${err}`)
  }
}

module.exports = {
  getAllQuotes,
  getOneQuote,
  createNewQuote
}
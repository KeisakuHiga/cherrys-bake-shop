const express = require('express')
const router = express.Router()
const { getAllQuotes, getOneQuote, createNewQuote } = require('../controllers/quotesController')

const { checkAccessToken } = require('../utils/auth-utils.js')

// non protected endpoints
router.post('/newQuote', createNewQuote)

 // this middleware checks whether or not a user provides an access token
router.use(checkAccessToken)

// protected endpoints
router.get('/getAllQuotes', getAllQuotes)
router.get('/:id', getOneQuote)

module.exports = router
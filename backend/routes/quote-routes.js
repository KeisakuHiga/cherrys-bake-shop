// private routes go here
const express = require('express');
const { getAllQuotes, getOneQuote, createNewQuote } = require('../controller/quotesController')
const router = express.Router()

router.use(express.json())

router.get('/all-quotes', getAllQuotes)
// router.get('/quotes/:id', getOneQuote)
// router.post('/quotes/newQuote', createNewQuote)

module.exports = router;
// private routes go here
const express = require('express');
const { getAllQuotes, getOneQuote, createNewQuote } = require('../controllers/quotesController')
const router = express.Router()

router.use(express.json())

router.get('/getAllQuotes', getAllQuotes)
// router.get('/quotes/:id', getOneQuote)
router.post('/newQuote', createNewQuote)

module.exports = router;
<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const {
  getAllQuotes,
  getOneQuote,
  createNewQuote
} = require("../controllers/quotesController");

router.get("/getAllQuotes", getAllQuotes);
router.get("/:id", getOneQuote);
router.post("/newQuote", createNewQuote);
=======
const express = require('express')
const router = express.Router()
const { getAllQuotes, getOneQuote, createNewQuote, seedFakeData } = require('../controllers/quotesController')

const { checkAccessToken } = require('../utils/utils.js')

// non protected endpoints
router.post('/newQuote', createNewQuote)
router.post('/seedData', seedFakeData)

 // this middleware checks whether or not a user provides an access token
router.use(checkAccessToken)

// protected endpoints
router.get('/getAllQuotes', getAllQuotes)
router.get('/:id', getOneQuote)
>>>>>>> master

module.exports = router;

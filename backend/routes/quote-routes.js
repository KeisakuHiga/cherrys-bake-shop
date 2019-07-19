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

module.exports = router;

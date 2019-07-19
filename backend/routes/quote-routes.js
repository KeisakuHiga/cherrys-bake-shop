const express = require("express");
const router = express.Router();
const {
  getAllQuotes,
  getOneQuote,
  createNewQuote,
  seedFakeData
} = require("../controllers/quotesController");

const { checkAccessToken } = require("../utils/utils.js");

// non protected endpoints
router.get("/", (req, res) => {
  res.send("api is working");
});
router.post("/newQuote", createNewQuote);
router.post("/seedData", seedFakeData);

// this middleware checks whether or not a user provides an access token
router.use(checkAccessToken);

// protected endpoints
router.get("/getAllQuotes", getAllQuotes);
router.get("/:id", getOneQuote);

module.exports = router;

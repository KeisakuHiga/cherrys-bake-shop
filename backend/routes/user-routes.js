const express = require('express')
const router = express.Router()
const { currentUser } = require('../controllers/private-controller')
const { checkAccessToken } = require('../utils/utils.js')

router.use(checkAccessToken)
router.get('/current-user', currentUser)

module.exports = router
const express = require('express')
const router = express.Router()

router.use(express.json())

router.use('/auth', require('./auth-routes'))
router.use('/quote', require('./quote-routes'))
router.use('/user', require('./user-routes'))

module.exports = router
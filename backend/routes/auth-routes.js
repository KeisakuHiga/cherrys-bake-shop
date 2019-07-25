const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/auth-controller')

// WE DECIDED NOT TO IMPLEMENT SIGN UP FUNCTIONALITY BASED ON THE CLIENT REQUEST
// router.post('/register', register)

router.post('/login', login)

module.exports = router
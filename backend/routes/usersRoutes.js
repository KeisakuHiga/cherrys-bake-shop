const express = require('express')
const { hello, getAllUsers } = require('../controller/usersController')
const router = express.Router()

router.use(express.json())

router.get('/hello', hello)
router.get('/all-users', getAllUsers)
// router.get('/users/:id', getOneUser)
// router.post('/users/newuser', createNewUser)

module.exports = router
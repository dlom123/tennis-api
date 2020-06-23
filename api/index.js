const express = require('express')
const players = require('./players')
const users = require('./users')

const router = express.Router()

router.use('/players', players)
router.use('/users', users)

module.exports = router

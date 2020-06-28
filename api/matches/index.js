const express = require('express')
const router = express.Router()
const doubles = require('./doubles')
const singles = require('./singles')

router.use('/doubles', doubles)
router.use('/singles', singles)

module.exports = router

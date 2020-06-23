const express = require('express')
const router = express.Router()
const all = require('./all')
const findById = require('./findById')

router.route('/')
  .get(all)

router.route('/:playerId')
  .get(findById)

module.exports = router

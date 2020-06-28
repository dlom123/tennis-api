const express = require('express')
const router = express.Router()
const all = require('./all')
const findById = require('./findById')

router.route('/')
  .get(all)

router.route('/:matchId')
  .get(findById)

module.exports = router

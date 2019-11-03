const express = require('express')
const router = express.Router()
const all = require('./all')
const allStats = require('./allStats')
const findById = require('./findById')

router.route('/')
  .get(all)

router.route('/:playerId')
  .get(findById)

router.route('/:playerId/stats')
  .get(allStats)

module.exports = router

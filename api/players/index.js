const express = require('express')
const router = express.Router()
const all = require('./all')
const findById = require('./findById')
const getMatches = require('./getMatches')

router.route('/')
  .get(all)

router.route('/:playerId')
  .get(findById)

router.route('/:playerId/matches')
  .get(getMatches)

  module.exports = router

const express = require('express')
const router = express.Router()
const all = require('./all')
const createMatch = require('./createMatch')

router.route('/')
  .get(all)
  .post(createMatch)

module.exports = router

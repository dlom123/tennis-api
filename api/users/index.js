const express = require('express')
const router = express.Router()
const all = require('./all')

router.route('/')
  .get(all)


module.exports = router

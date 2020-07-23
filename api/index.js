const express = require('express')
const locations = require('./locations')
const matches = require('./matches')
const players = require('./players')
const stats = require('./stats')
const users = require('./users')

const router = express.Router()

router.use('/locations', locations)
router.use('/matches', matches)
router.use('/players', players)
router.use('/stats', stats)
router.use('/users', users)

module.exports = router

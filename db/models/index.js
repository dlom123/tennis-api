'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'local'
const config = require(path.resolve(process.cwd(), 'config/config.js'))[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const db = {}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err)
  })

db.Sequelize = Sequelize
db.sequelize = sequelize

// put all models on the db object
db.players = require('../models/players')(sequelize, Sequelize)
db.playersStats = require('../models/playersStats')(sequelize, Sequelize)
db.stats = require('../models/stats')(sequelize, Sequelize)

// Associations
db.players.hasMany(db.playersStats, { as: 'playerStats' })
db.playersStats.belongsTo(db.players)
db.playersStats.belongsTo(db.stats)
db.stats.hasMany(db.playersStats, { as: 'playerStats' })

module.exports = db

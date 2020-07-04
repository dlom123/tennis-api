const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

exports.getAll = async () =>
  db.Locations.findAll({
    attributes: ['id', 'name', 'settings', 'surfaces', 'isPrivate', 'createdAt']
  })

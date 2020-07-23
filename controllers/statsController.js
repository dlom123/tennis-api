const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

exports.getAll = async () =>
  await db.Stats.findAll({
    attributes: ['id', 'name', 'createdAt'],
    order: [
      ['id', 'ASC']
    ]
  })

exports.getById = async statId =>
  await db.Stats.findOne({
    attributes: ['id', 'name', 'createdAt'],
    where: {
      id: Number(statId)
    }
  })

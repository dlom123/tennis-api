const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

exports.getAll = async () =>
  await db.Stats.findAll({
    attributes: ['id', 'name', 'createdAt'],
    order: [
      ['id', 'ASC']
    ]
  })

exports.getById = async statId => {
  const stat = await db.Stats.findOne({
    attributes: ['id', 'name', 'createdAt'],
    where: {
      id: Number(statId)
    }
  })
  if (stat === null) {
    return {}
  }
  return stat
}

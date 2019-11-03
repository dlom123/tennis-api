const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all players
*/

module.exports = async (req, res) => {
  let whereClause = {}
  let orderClause = []

  if (req.query.isActive) {
    whereClause = {
      deletedAt: null
    }
  }
  if (req.query.sort && req.query.sort.toLowerCase() === 'lastname') {
    orderClause.push(['lastName', 'ASC'])
  }

  await db.players.findAll({
    attributes: ['id', 'firstName', 'lastName', 'gender', 'avatarUrl'],
    where: whereClause,
    order: orderClause
  })
    .then(players => {
      console.log('GOT PLAYERS', players)
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: players
      }

      return res.status(200).json(data)
    })
}

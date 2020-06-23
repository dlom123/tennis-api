const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all players
*/

module.exports = async (req, res) => {
  let whereClause = {}
  let orderClause = []

  await db.Players.findAll({
    // attributes: ['id', 'gender', 'height', 'gender', 'avatarUrl'],
    where: whereClause,
    order: orderClause
  })
    .then(players => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: players
      }

      return res.status(200).json(data)
    })
}

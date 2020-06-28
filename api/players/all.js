const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all players
*/

module.exports = async (req, res) => {
  let whereClause = {}
  let orderClause = []

  await db.Players.findAll({
    attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                 'backhand', 'avatarUrl', 'createdAt'],
    where: whereClause,
    order: orderClause,
    include: [
      {
        model: db.Users,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt']
      }
    ]
  })
    .then(players => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: players
      }

      return res.status(200).json(data)
    })
}

const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get player by id
*/

module.exports = async (req, res) => {
  await db.Players.findOne({
    attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                 'backhand', 'avatarUrl', 'createdAt'],
    where: {
      id: Number(req.params.playerId)
    },
    include: [
      {
        model: db.Users,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt']
      }
    ]
  })
    .then(player => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: [player]
      }

      return res.status(200).json(data)
    })
}

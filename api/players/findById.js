const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get player by id
*/

module.exports = async (req, res) => {
  await db.players.findOne({
    attributes: ['id', 'firstName', 'lastName', 'gender', 'avatarUrl'],
    where: {
      id: Number(req.params.playerId)
    }
  })
    .then(player => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: [player]
      }

      return res.status(200).json(data)
    })
}

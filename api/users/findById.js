const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get player by id
*/

module.exports = async (req, res) => {
  await db.Users.findOne({
    attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
    where: {
      id: Number(req.params.userId)
    }
  })
    .then(user => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: [user]
      }

      return res.status(200).json(data)
    })
}

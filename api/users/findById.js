const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get player by id
*/

module.exports = async (req, res) => {
  user = await db.Users.findOne({
    attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
    where: {
      id: Number(req.params.userId)
    }
  })

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: [user]
  }

  return res.status(200).json(data)
}

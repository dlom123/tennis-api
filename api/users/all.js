const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all users
*/

module.exports = async (req, res) => {
  let whereClause = {}
  let orderClause = []

  // if (req.query.isActive) {
  //   whereClause = {
  //     deletedAt: null
  //   }
  // }
  // if (req.query.sort && req.query.sort.toLowerCase() === 'lastname') {
  //   orderClause.push(['lastName', 'ASC'])
  // }

  // await db.Users.findAll({
  //   // attributes: ['id', 'first_name', 'last_name', 'email'],
  //   where: whereClause,
  //   order: orderClause
  // })
  users = await db.Users.findAll({
    attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
  })

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: users
  }

  return res.status(200).json(data)
}

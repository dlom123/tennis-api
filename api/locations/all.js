const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all locations
*/

module.exports = async (req, res) => {
  let whereClause = {}
  let orderClause = []

  await db.Locations.findAll({
    attributes: ['id', 'name', 'settings', 'surfaces', 'createdAt'],
    where: whereClause,
    order: orderClause
  })
    .then(locations => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: locations
      }

      return res.status(200).json(data)
    })
}

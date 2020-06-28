const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get location by id
*/

module.exports = async (req, res) => {
  await db.Locations.findOne({
    attributes: ['id', 'name', 'settings', 'surfaces', 'createdAt'],
    where: {
      id: Number(req.params.locationId)
    }
  })
    .then(location => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: [location]
      }

      return res.status(200).json(data)
    })
}

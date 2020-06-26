const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all singles matches
*/

module.exports = async (req, res) => {
  let whereClause = {}
  let orderClause = []

  await db.MatchesSingles.findAll({
    attributes: ['id', 'setting', 'surface', 'date', 'createdAt'],
    where: whereClause,
    order: orderClause,
    include: [
      {
        model: db.Locations,
        as: 'location',
        attributes: ['id', 'name']
      },
      {
        model: db.MatchesSinglesSets,
        as: 'sets',
        attributes: ['id', 'score', 'createdAt'],
        include: [
          {
            model: db.Players,
            as: 'player',
            attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                         'backhand', 'avatarUrl', 'createdAt'],
            include: [
              {
                model: db.Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt']
              }
            ]
          }
        ]
      }
    ]
  })
    .then(matches => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: matches
      }

      return res.status(200).json(data)
    })
}

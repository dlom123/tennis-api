const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get singles match by id
*/

module.exports = async (req, res) => {
  await db.MatchesSingles.findOne({
    attributes: ['id', 'setting', 'surface', 'date', 'createdAt'],
    where: {
      id: Number(req.params.matchId)
    },
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
    .then(match => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: [match]
      }

      return res.status(200).json(data)
    })
}

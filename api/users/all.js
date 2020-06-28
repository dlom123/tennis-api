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
  await db.Users.findAll({
    attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
    include: [
      // { model: db.MatchesSingles, as: 'matches_singles' },
      // { model: db.MatchesSingles, as: 'match' },
      // { model: db.MatchesSinglesSets, as: 'sets' },
      // { model: db.MatchesSinglesSets, as: 'sets_singles' },
      // { model: db.MatchesDoubles, as: 'matches_doubles' },
      // { model: db.MatchesDoubles, as: 'match' },
      // { model: db.MatchesDoublesSets, as: 'sets' },
      // { model: db.MatchesDoublesTeams, as: 'team' },
      // { model: db.MatchesDoublesTeamsPlayers, as: 'players' },
      // { model: db.Locations, as: 'location' },
      // { model: db.Users, as: 'user' },
      // { model: db.Players, as: 'player' },
    ]
  })
    .then(users => {
      const data = {
        // always wrap API responses in a "data" array for consistency
        data: users
      }

      return res.status(200).json(data)
    })
  //   .catch(err => {
  //     console.error(err)
  //   })
}

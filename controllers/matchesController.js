const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

exports.getMatchesSinglesByIds = async matchIds =>
  await db.MatchesSingles.findAll({
    attributes: ['id', 'location_id', 'setting', 'surface', 'date'],
    where: {
      id: [...matchIds]
    },
    order: [[
      {model: db.MatchesSinglesSets, as: 'sets'},
      'id', 'ASC'
    ]],
    include: [
      {
        model: db.Locations,
        as: 'location',
        attributes: ['id', 'name']
      },
      {
        model: db.MatchesSinglesSets,
        as: 'sets',
        required: true,
        attributes: ['id', 'score'],
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

exports.getMatchesDoublesByIds = async matchIds =>
  await db.MatchesDoubles.findAll({
    attributes: ['id', 'location_id', 'setting', 'surface', 'date'],
    where: {
      id: [...matchIds]
    },
    order: [[
      {model: db.MatchesDoublesSets, as: 'sets'},
      'id', 'ASC'
    ]],
    include: [
      {
        model: db.Locations,
        as: 'location',
        attributes: ['id', 'name']
      },
      {
        model: db.MatchesDoublesSets,
        as: 'sets',
        required: true,
        attributes: ['id', 'score'],
        include: [
          {
            model: db.MatchesDoublesTeams,
            as: 'team',
            attributes: ['id'],
            include: [
              {
                model: db.MatchesDoublesTeamsPlayers,
                as: 'players',
                attributes: ['id'],
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
          }
        ]
      }
    ]
  })

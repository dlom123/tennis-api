const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all singles or doubles matches, based on `type` query parameter

  Required query parameters:
  - type=singles|doubles
    - the type of matches to retrieve
*/

module.exports = async (req, res) => {
  // request validation
  if (!req.query.type) {
    // invalid request -- query param `type` must be provided
    return res.status(400).json({ error: 'type parameter must be provided' })
  }

  // valid request...perform requested operation
  let whereClause = {}
  let orderClause = []

  const matchType = req.query.type
  if (matchType === 'singles') {
    matches = await db.MatchesSingles.findAll({
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
  } else if (matchType === 'doubles') {
    matches = await db.MatchesDoubles.findAll({
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
          model: db.MatchesDoublesSets,
          as: 'sets',
          attributes: ['id', 'score', 'createdAt'],
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
  } else {
    // invalid request -- query param `type` must have value 'singles' or 'doubles'
    return res.status(400).json({ error: 'invalid value for type parameter' })
  }

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: matches
  }

  return res.status(200).json(data)
}
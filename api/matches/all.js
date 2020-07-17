const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))
const transform = require('@utils/transforms')

/*
  Get all singles or doubles matches, based on `type` query parameter

  Optional query parameters:
  - type=singles|doubles
    - the type of matches to retrieve
*/

module.exports = async (req, res) => {
  if (req.query.type && !['singles', 'doubles'].includes(req.query.type)) {
    // invalid request -- query param `type` must have value 'singles' or 'doubles'
    return res.status(400).json({ error: 'invalid value for type parameter' })
  }

  let whereClause = {}
  let orderClause = []
  let matchesSingles = []
  let matchesDoubles = []
  if (!req.query.type || req.query.type === 'singles') {
    matchesSingles = await db.MatchesSingles.findAll({
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
          attributes: ['id', 'seq', 'score', 'tiebreaker_score', 'createdAt'],
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

    matchesSingles = transform.flattenMatchesSinglesPlayers(matchesSingles)
  }
  
  if (!req.query.type || req.query.type === 'doubles') {
    matchesDoubles = await db.MatchesDoubles.findAll({
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
          attributes: ['id', 'seq', 'score', 'tiebreaker_score', 'createdAt'],
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

    matchesDoubles = transform.flattenMatchesDoublesPlayers(matchesDoubles)
  }

  matchesData = {}
  if (!req.query.type) {
    matchesData.singles = matchesSingles
    matchesData.doubles = matchesDoubles
  } else if (req.query.type === 'singles' && matchesSingles.length) {
    matchesData = matchesSingles
  } else if (req.query.type === 'doubles' && matchesDoubles.length) {
    matchesData = matchesDoubles
  }

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: matchesData
  }

  return res.status(200).json(data)
}
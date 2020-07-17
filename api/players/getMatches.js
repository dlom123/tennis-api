const matchesController = require('@controllers/matchesController')
const playersController = require('@controllers/playersController')

/*
  Get all of a player's matches by playerId

  Optional query parameters:
  - type=singles|doubles
    - the type of matches to retrieve
*/

module.exports = async (req, res) => {
  if (req.query.type && !['singles', 'doubles'].includes(req.query.type)) {
    // invalid request -- query param `type` must have value 'singles' or 'doubles'
    return res.status(400).json({ error: 'invalid value for type parameter' })
  }

  let matchesSingles = []
  let matchesDoubles = []
  if (!req.query.type || req.query.type === 'singles') {
    // get all match ids for the given player id
    matchIds = await playersController.getMatchesSinglesIdsByPlayerId(req.params.playerId)

    // get all match data for match ids
    matchesSingles = await matchesController.getMatchesSinglesByIds(matchIds)
  }
  
  if (!req.query.type || req.query.type === 'doubles') {
    // get all match ids for the given player id
    matchIds = await playersController.getMatchesDoublesIdsByPlayerId(req.params.playerId)

    // get all match data for match ids
    matchesDoubles = await matchesController.getMatchesDoublesByIds(matchIds)
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

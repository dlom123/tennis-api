const matchesController = require('@controllers/matchesController')
const playersController = require('@controllers/playersController')

/*
  Get all of a player's matches by playerId

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
  const matchType = req.query.type
  if (matchType === 'singles') {
    // get all match ids for the given player id
    matchIds = await playersController.getMatchesSinglesIdsByPlayerId(req.params.playerId)

    // get all match data for match ids
    matches = await matchesController.getMatchesSinglesByIds(matchIds)
  } else if (matchType === 'doubles') {   
    // get all match ids for the given player id
    matchIds = await playersController.getMatchesDoublesIdsByPlayerId(req.params.playerId)

    // get all match data for match ids
    matches = await matchesController.getMatchesDoublesByIds(matchIds)
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

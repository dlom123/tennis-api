const matchesController = require('@controllers/matchesController')

/*
  Create a singles or doubles match, based on `type` parameter

  Required body parameters:
  - type=singles|doubles
    - the type of match to create
*/

module.exports = async (req, res) => {
  // request validation
  if (!req.body.type) {
    // invalid request -- query param `type` must be provided
    return res.status(400).json({ error: 'type parameter must be provided' })
  }

  // valid request...perform requested operation
  const matchType = req.body.type
  if (matchType === 'singles') {
    // perform any singles-specific validation
    // TODO: playerId must be an integer type

    // creating a singles match
    match = await matchesController.createMatchSingles(req.body)
  } else if (matchType === 'doubles') {
    // perform any doubles-specific validation
    // TODO: only two players allowed per set score

    // creating a doubles match
    match = await matchesController.createMatchDoubles(req.body)
  } else {
    // invalid request -- query param `type` must have value 'singles' or 'doubles'
    return res.status(400).json({ error: 'invalid value for type parameter' })
  }

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: match
  }

  return res.status(201).json(data)
}
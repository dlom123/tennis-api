const playersController = require('@controllers/playersController')

/*
  Get all players

  Optional query parameters:
  - withCount (no value)
    - include a count of the total number of players
*/

module.exports = async (req, res) => {
  const data = {
    // always wrap API responses in a "data" property for consistency
    data: {}
  }

  if ('withCount' in req.query) {
    data.data.count = await playersController.getCount()
  }

  data.data.players = await playersController.getAll()

  return res.status(200).json(data)
}

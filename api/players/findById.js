const playersController = require('@controllers/playersController')

/*
  Get player by id

  Required route parameters:
  - playerId=1
    - the id of the player to retrieve
*/

module.exports = async (req, res) => {
  player = await playersController.getById(req.params.playerId)

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: [player]
  }

  return res.status(200).json(data)
}

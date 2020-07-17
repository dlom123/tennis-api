const playersController = require('@controllers/playersController')

/*
  Get player by id

  Required route parameters:
  - playerId=1
    - the id of the player to retrieve
*/

module.exports = async (req, res) => {

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: {}
  }

  let player = await playersController.getById(req.params.playerId)

  // transform: flatten the first/last name from the user data into the player data
  const userInfo = player.dataValues.user
  delete player.dataValues.user

  data.data.player = {
    ...player.dataValues,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName
  }

  return res.status(200).json(data)
}

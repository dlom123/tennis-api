const playersController = require('@controllers/playersController')

/*
  Get all players

  Optional query parameters:
  - search=searchTerm
    - filter results, looking for searchTerm in firstName or lastName (case-insensitive)
*/

module.exports = async (req, res) => {
  const data = {
    // always wrap API responses in a "data" property for consistency
    data: {}
  }

  let searchTerm = req.query.search || ''

  let players = await playersController.getAll(search=searchTerm)

  // transform: flatten the first/last name from the user data into the player data
  players = players.map(player => {
    const userInfo = player.dataValues.user
    delete player.dataValues.user
    return {
      ...player.dataValues,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName
    }
  })

  data.data.players = players

  return res.status(200).json(data)
}

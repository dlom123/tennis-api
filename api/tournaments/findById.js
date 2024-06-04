const matchesController = require('@controllers/matchesController')

/*
  Get tournament by id

  Required route parameters:
  - tournamentId=1
    - the id of the tournament to retrieve
*/

module.exports = async (req, res) => {
  try {
    let matches = await matchesController.getById(req.params.tournamentId)

    const data = {
      // always wrap API responses in a "data" property for consistency
      data: tournament
    }

    return res.status(200).json(data)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: "Server error" })
  }
}

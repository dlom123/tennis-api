const matchesController = require('@controllers/matchesController')

/*
  Get all tournaments

  For now, this just gets all matches grouped by tournament dates.
*/

module.exports = async (req, res) => {
  try {
    matches = await matchesController.getAll()

    const data = {
      // always wrap API responses in a "data" property for consistency
      data: matches
    }

    return res.status(200).json(data)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: "Server error" })
  }
}

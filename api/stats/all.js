const statsController = require('@controllers/statsController')

/*
  Get all stats
*/

module.exports = async (req, res) => {
  try {
    stats = await statsController.getAll()

    const data = {
      // always wrap API responses in a "data" property for consistency
      data: stats
    }

    return res.status(200).json(data)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: "Server error" })
  }
}

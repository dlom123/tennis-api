const statsController = require('@controllers/statsController')

/*
  Get all stats
*/

module.exports = async (req, res) => {
  stats = await statsController.getAll()

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: stats
  }
  
  return res.status(200).json(data)
}

const locationsController = require('@controllers/locationsController')

/*
  Get all locations
*/

module.exports = async (req, res) => {
  locations = await locationsController.getAll()

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: locations
  }
  
  return res.status(200).json(data)
}

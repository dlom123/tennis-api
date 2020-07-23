const statsController = require('@controllers/statsController')

/*
  Get stat by id

  Required route parameters:
  - statId=1
    - the id of the stat to retrieve
*/

module.exports = async (req, res) => {
  let stat = await statsController.getById(req.params.statId)

  const data = {
    // always wrap API responses in a "data" property for consistency
    data: stat
  }

  return res.status(200).json(data)
}

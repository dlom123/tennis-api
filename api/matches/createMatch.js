/*
  Create a singles or doubles match, based on `type` parameter

  Required body parameters:
  - type=singles|doubles
    - the type of match to create
*/

module.exports = async (req, res) => {
  // request validation
  if (!req.body.type) {
    // invalid request -- query param `type` must be provided
    return res.status(400).json({ error: 'type parameter must be provided' })
  }

  // valid request...perform requested operation
  const matchType = req.body.type
  if (matchType == 'singles') {
    // creating a singles match
  } else if (matchType == 'doubles') {
    // creating a doubles match
  } else {
    // invalid request -- query param `type` must have value 'singles' or 'doubles'
    return res.status(400).json({ error: 'invalid value for type parameter' })
  }

  // const data = {
  //   // always wrap API responses in a "data" property for consistency
  //   data: matches
  // }
  data = { message: `created ${matchType} match`}
  return res.status(200).json(data)
}
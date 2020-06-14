const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

/*
  Get all stats for a player by player id
*/

module.exports = async (req, res) => {
  let results = await db.stats.findAll({
    attributes: ['name'],
    include: {
      model: db.playersStats,
      as: 'playerStats',
      attributes: ['num', 'denom'],
      where: {
        'player_id': req.params.playerId // TODO: figure out how to get camelCase property name to translate to underscored query field name
      },
      require: true
    },
    order: ['seq']
  })

  stats = []

  // transform the result
  results.map(result => {
    console.log(result)
    stats.push({
      name: result.name,
      num: result.playerStats[0].num,
      denom: result.playerStats[0].denom
    })
  })

  const data = {
    // always wrap API responses in a "data" array for consistency
    data: stats
  }

  return res.status(200).json(data)
}

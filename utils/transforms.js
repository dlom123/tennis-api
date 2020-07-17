exports.flattenMatchesSinglesPlayers = matches => {
  // flatten the first/last name from the user data into the player data
  matches = matches.map(match => {
    match.sets = match.sets.map(set => {
      set.player.dataValues.firstName = set.player.user.firstName
      set.player.dataValues.lastName = set.player.user.lastName
      delete set.player.dataValues.user
      return set
    })
    return match
  })

  return matches
}

exports.flattenMatchesDoublesPlayers = matches => {
  // transform: flatten the first/last name from the user data into the player data
  matches = matches.map(match => {
    match.sets = match.sets.map(set => {
      set.team.players.map(player => {
        player.player.dataValues.firstName = player.player.user.firstName
        player.player.dataValues.lastName = player.player.user.lastName
        delete player.player.dataValues.user
        return player
      })
      return set
    })
    return match
  })

  return matches
}
const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))

const removeDuplicates = arr => [...new Set(arr)]

exports.getAll = async () =>
  await db.Players.findAll({
    attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                 'backhand', 'avatarUrl', 'createdAt'],
    include: [
      {
        model: db.Users,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
        require: true
      }
    ]
  })

exports.getById = async playerId =>
  await db.Players.findOne({
    attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                 'backhand', 'avatarUrl', 'createdAt'],
    where: {
      id: Number(playerId)
    },
    include: [
      {
        model: db.Users,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
        require: true
      }
    ]
  })

exports.getCount = async () =>
  await db.Players.count({
    include: [
      {
        model: db.Users,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
        require: true,
        where: {
          isActive: true
        }
      }
    ]
  })

exports.getMatchesDoublesIdsByPlayerId = async playerId => {
  doublesTeamsPlayer = await db.MatchesDoublesTeamsPlayers.findOne({
    attributes: ['id'],
    where: {
      playerId: Number(playerId)
    },
    include: [
      {
        model: db.MatchesDoublesTeams,
        as: 'team',
        include: [
          {
            model: db.MatchesDoublesSets,
            as: 'sets'
          }
        ]
      }
    ]
  })

  // remove duplicate match ids
  matchIds = removeDuplicates(doublesTeamsPlayer.team.sets.map(set => set.matchId))

  return matchIds
}

exports.getMatchesSinglesIdsByPlayerId = async playerId => {
  sets = await db.MatchesSinglesSets.findAll({
    attributes: ['matchId'],
    where: {
      playerId: Number(playerId)
    }
  })

  // remove duplicate match ids
  matchIds = removeDuplicates(sets.map(set => set.matchId))

  return matchIds
}

const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))
const Op = db.Sequelize.Op

const removeDuplicates = arr => [...new Set(arr)]

exports.getAll = async (searchTerm = null) => {
    const whereClause = []
    // apply the first/last name search term if one was provided
    if (searchTerm) {
      whereClause.push({
        [Op.or]: [
          {
            first_name: {
              // perform case-insensitive comparison
              [Op.iLike]: `%${searchTerm}%`
            }
          },
          {
            last_name: {
              // perform case-insensitive comparison
              [Op.iLike]: `%${searchTerm}%`
            }
          }
        ]
      })
    }

    return await db.Players.findAll({
      attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                  'backhand', 'avatarUrl', 'createdAt'],
      order: [
        [
          {model: db.Users, as: 'user' },
          'lastName', 'ASC'
        ]
      ],
      include: [
        {
          model: db.Users,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
          require: true,
          where: whereClause
        }
      ]
    })
  }

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
  doublesTeamsPlayer = await db.Players.findOne({
    attributes: ['id'],
    where: {
      id: Number(playerId)
    },
    include: [
      {
        model: db.MatchesDoublesTeams,
        as: 'teams',
        include: [
          {
            model: db.MatchesDoublesSets,
            as: 'sets'
          }
        ]
      }
    ]
  })

  let matchIds = []

  doublesTeamsPlayer.teams.forEach(team => {
    const teamMatchIds = removeDuplicates(team.sets.map(set => set.matchId))
    teamMatchIds.forEach(id => {
      matchIds.push(id)
    })
  })

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

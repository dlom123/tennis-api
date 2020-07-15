const path = require('path')
const db = require(path.resolve(process.cwd(), 'db/models'))
const transform = require('@utils/transforms')

const buildMatchObject = data => ({
  date: data.date,
  locationId: data.locationId,
  setting: data.setting,
  surface: data.surface
})

exports.createMatchSingles = async body => {
  // isolate match-level data
  const match = buildMatchObject(body)

  // create new match record
  const newMatch = await db.MatchesSingles.create(match)

  // isolate set-level data, tied to newly-created match id
  const sets = []
  body.players.forEach(player =>
    player.sets.forEach(set => {
      sets.push({
        matchId: newMatch.id,
        playerId: player.id,
        score: set.score,
        tiebreakerScore: set.tiebreakerScore,
        seq: set.seq
      })
    })
  )

  // create new set records
  const newSets = await db.MatchesSinglesSets.bulkCreate(sets)

  // construct a response object from the new records and return it
  return {
    ...newMatch.dataValues,
    sets: newSets
  }
}

exports.createMatchDoubles = async body => {
  // Isolate match-level data
  const match = buildMatchObject(body)

  // Create new match record
  const newMatch = await db.MatchesDoubles.create(match)

  // Create new set record -- several steps.
  // First, check for an existing doubles team with each pair of playerIds
  // and create a new team for the players if one does not already exist.
  const responseSets = []
  body.teams.forEach(async team => {
    const teamMatches = await db.MatchesDoublesTeamsPlayers.findAll({
      attributes: ['teamId', [db.sequelize.fn('COUNT', 'id'), 'numPlayers']],
      where: {
        playerId: team.playerIds
      },
      group: 'teamId',
    })
    // find the first team id grouping that has more than one player associated
    let existingTeam = teamMatches
            .map(teamMatch => teamMatch.dataValues)
            .find(team => Number(team.numPlayers) > 1)

    let teamId = existingTeam ? existingTeam.teamId : null
    if (!existingTeam) {
      // The players that played together do not have an existing team record
      // (have not played together before). Create a team for them.
      // Create new doubles team
      const newTeam = await db.MatchesDoublesTeams.create()
      teamId = newTeam.dataValues.id

      // Create each player's association to the newly-created doubles team
      team.playerIds.forEach(async playerId => {
        await db.MatchesDoublesTeamsPlayers.create({
          teamId,
          playerId
        })  
      })
    }

    // Build each team's sets objects
    const sets = []
    team.sets.forEach(set => {
      sets.push({
        matchId: newMatch.id,
        teamId,
        score: set.score,
        tiebreakerScore: set.tiebreakerScore,
        seq: set.seq
      })
    })

    // create new set records
    await db.MatchesDoublesSets.bulkCreate(sets)

    // add this round of sets to the response array
    responseSets.push(...sets)
  })
  // construct a response object from the new records and return it
  return {
    ...newMatch.dataValues,
    sets: responseSets
  }
}

exports.getMatchesSinglesByIds = async matchIds => {
  let matches = await db.MatchesSingles.findAll({
    attributes: ['id', 'locationId', 'setting', 'surface', 'date'],
    where: {
      id: [...matchIds]
    },
    order: [[
      {model: db.MatchesSinglesSets, as: 'sets'},
      'id', 'ASC'
    ]],
    include: [
      {
        model: db.Locations,
        as: 'location',
        attributes: ['id', 'name']
      },
      {
        model: db.MatchesSinglesSets,
        as: 'sets',
        required: true,
        attributes: ['id', 'score', 'tiebreakerScore'],
        include: [
          {
            model: db.Players,
            as: 'player',
            attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                        'backhand', 'avatarUrl', 'createdAt'],
            include: [
              {
                model: db.Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt']
              }
            ]
          }
        ]
      }
    ]
  })

  matches = transform.flattenMatchesSinglesPlayers(matches)

  return matches
}

exports.getMatchesDoublesByIds = async matchIds => {
  let matches = await db.MatchesDoubles.findAll({
    attributes: ['id', 'locationId', 'setting', 'surface', 'date'],
    where: {
      id: [...matchIds]
    },
    order: [[
      {model: db.MatchesDoublesSets, as: 'sets'},
      'id', 'ASC'
    ]],
    include: [
      {
        model: db.Locations,
        as: 'location',
        attributes: ['id', 'name']
      },
      {
        model: db.MatchesDoublesSets,
        as: 'sets',
        required: true,
        attributes: ['id', 'score', 'tiebreakerScore'],
        include: [
          {
            model: db.MatchesDoublesTeams,
            as: 'team',
            attributes: ['id'],
            include: [
              {
                model: db.MatchesDoublesTeamsPlayers,
                as: 'players',
                attributes: ['id'],
                include: [
                  {
                    model: db.Players,
                    as: 'player',
                    attributes: ['id', 'gender', 'height', 'rating', 'isRightHanded',
                                  'backhand', 'avatarUrl', 'createdAt'],
                    include: [
                      {
                        model: db.Users,
                        as: 'user',
                        attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt']
                      }
                    ]
              }
                ]
              }
            ]
          }
        ]
      }
    ]
  })

  matches = transform.flattenMatchesDoublesPlayers(matches)

  return matches
}
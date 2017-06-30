function getSortParams (player1, player2, activePowers, sortBy) {
  if (sortBy === 'player') {
    return {
      player1: player1.name,
      player2: player2.name
    }
  }
  if (sortBy === 'type') {
    return {
      player1: activePowers.player1 ? activePowers.player1.name : false,
      player2: activePowers.player2 ? activePowers.player2.name : false
    }
  } else if (sortBy === 'time') {
    return {
      player1: activePowers.player1 ? activePowers.player1.timeLeft : false,
      player2: activePowers.player2 ? activePowers.player2.timeLeft : false
    }
  }
}

export default function sortPlayers (player1Id, player2Id, playerStore, powerStore, clockStore, sortBy, timelineName) {
  const player1 = playerStore.players.find(p => p.id === player1Id)
  const player2 = playerStore.players.find(p => p.id === player2Id)
  const activePowers = {
    player1: Object.assign({}, powerStore.getPower(player1Id, timelineName), {
      timeLeft: powerStore.getTimeLeft(player1Id, timelineName, clockStore.time)
    }),
    player2: Object.assign({}, powerStore.getPower(player2Id, timelineName), {
      timeLeft: powerStore.getTimeLeft(player2Id, timelineName, clockStore.time)
    })
  }
  const sortParams = getSortParams(player1, player2, activePowers, sortBy)
  if (sortParams.player1 === false && sortParams.player2 === false) return 0
  if (sortParams.player1 === false) return -1
  if (sortParams.player2 === false) return 1
  if (sortParams.player1 < sortParams.player2) return -1
  if (sortParams.player1 > sortParams.player2) return 1
  return 0
}

function getSortParams (player1, player2, sortBy) {
  if (sortBy === 'player') {
    return {
      player1: player1.name,
      player2: player2.name
    }
  }
  if (sortBy === 'type') {
    return {
      player1: player1.activePower ? player1.activePower.name : false,
      player2: player2.activePower ? player2.activePower.name : false
    }
  } else if (sortBy === 'time') {
    return {
      player1: player1.activePower ? player1.activePower.timeLeft : false,
      player2: player2.activePower ? player2.activePower.timeLeft : false
    }
  }
}

export default function sortPlayers (player1, player2, sortBy) {
  const sortParams = getSortParams(player1, player2, sortBy)
  if (sortParams.player1 === false && sortParams.player2 === false) return 0
  if (sortParams.player1 === false) return -1
  if (sortParams.player2 === false) return 1
  if (sortParams.player1 < sortParams.player2) return -1
  if (sortParams.player1 > sortParams.player2) return 1
  return 0
}

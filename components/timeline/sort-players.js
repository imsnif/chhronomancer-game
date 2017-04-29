import powerStore from '../../stores/power'

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
      player2: activePowers.player2 ? activePowers.player1.timeLeft : false
    }
  }
}

export default function sortPlayers (player1, player2, activePowers, sortBy) {
  const sortParams = getSortParams(player1, player2, activePowers, sortBy)
  if (sortParams.player1 === false && sortParams.player2 === false) return 0
  if (sortParams.player1 === false) return -1
  if (sortParams.player2 === false) return 1
  if (sortParams.player1 < sortParams.player2) return -1
  if (sortParams.player1 > sortParams.player2) return 1
  return 0
}

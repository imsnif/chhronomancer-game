import playerStore from '../stores/player'
import timelineStore from '../stores/timeline'
import powerStore from '../stores/power'
import statsStore from '../stores/stats'

let ws = false

export default function connect (userId) { // TODO: add id as header
  if (ws) ws.close()
  ws = new WebSocket('ws://10.0.0.6:3000/socket/feed', '', {
    access_token: statsStore.accessToken
  }) // TODO: from config

  ws.onopen = () => {
    statsStore.connect()
    ws.send(userId)
  }

  ws.onmessage = (e) => {
    if (!e || !e.data) return
    try {
      const data = JSON.parse(e.data)
      if (data.players) {
        const playerData = Array.isArray(data.players)
          ? data.players
          : [data.players]
        playerData.forEach(p => playerStore.addPlayer(p))
      }
      if (data.powers) {
        const powersData = Array.isArray(data.powers)
          ? data.powers
          : [data.powers]
        powersData.forEach(p => powerStore.addPower(p))
      }
      if (data.timelines) {
        const timelinesData = Array.isArray(data.timelines)
          ? data.timelines
          : [data.timelines]
        timelinesData.forEach(t => timelineStore.addTimeline(t))
      }
      if (data.games) {
        const gameData = data.games[0] || data.games // TODO: fix server to only report current game
        if (gameData) statsStore.announceWinner(gameData.winnerId)
      }
    } catch (err) {} // fail silently
  }
}

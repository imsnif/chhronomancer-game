import playerStore from '../stores/player'
import timelineStore from '../stores/timeline'
import powerStore from '../stores/power'
import statsStore from '../stores/stats'
import messageStore from '../stores/message'

let ws = false

function reconnect (userId) {
  setTimeout(() => {
    if (!ws) return connect(userId)
    if (ws.readyState === ws.CLOSED) {
      connect(userId)
    }
  }, 1000)
}

export default function connect (userId) { // TODO: add id as header
  if (ws) {
    ws.onopen = () => {}
    ws.onclose = () => {}
    ws.close()
  }
  ws = new WebSocket('ws://10.0.0.6:3000/socket/feed', '', {
    access_token: statsStore.accessToken
  }) // TODO: from config

  ws.onopen = () => {
    statsStore.connect()
  }

  ws.onclose = () => {
    reconnect(userId)
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
      if (data.messages) {
        const messageData = Array.isArray(data.messages)
          ? data.messages
          : [data.messages]
        messageData.forEach(m => messageStore.addMessage(m))
      }
    } catch (err) {} // fail silently
  }
}

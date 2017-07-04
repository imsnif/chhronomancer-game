import playerStore from '../stores/player'
import timelineStore from '../stores/timeline'
import powerStore from '../stores/power'
import statsStore from '../stores/stats'

var ws = new WebSocket('ws://10.0.0.6:3000')

statsStore.changePlayerId(1) // TODO: remove statsStore
statsStore.incrementActions(10)

function updatePlayers (players) {
  players.forEach(p => {
    playerStore.addPlayer(p)
  })
}

function updatePowers (powers) {
  powers.forEach(p => {
    powerStore.addPower(p)
  })
}

function updateTimelines (timelines) {
  timelines.forEach(t => {
    timelineStore.addTimeline(t)
  })
}

ws.onmessage = (e) => {
  if (!e || !e.data) return
  let data = {}
  try {
    data = JSON.parse(e.data)
  } catch (err) {
  }
  if (data.players) {
    updatePlayers(data.players)
  }
  if (data.powers) {
    updatePowers(data.powers)
  }
  if (data.timelines) {
    updateTimelines(data.timelines)
  }
}

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
}

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
}

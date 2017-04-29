import playersStore from '../stores/players'
import timelineStore from '../stores/timeline'
import powerStore from '../stores/power'

const timelines = [
  {name: 'Timeline 1', type: 'steal'},
  {name: 'Timeline 2', type: 'assistPrevent'},
  {name: 'Timeline 3', type: 'reset'}
]

const players = [
  {
    id: 1,
    name: 'Aram',
    items: {
      assistPrevent: false,
      reset: false,
      steal: false,
      lock: false,
      unlock: false
    },
    image: require('../assets/placeholders/green_me.png')
  },
  {
    id: 2,
    name: 'Tom',
    items: {
      assistPrevent: true,
      reset: true,
      steal: true,
      lock: true,
      unlock: false
    },
    image: require('../assets/placeholders/green_tom.png')
  },
  {
    id: 3,
    name: 'Gondollieri',
    items: {
      assistPrevent: true,
      reset: true,
      steal: true,
      lock: true,
      unlock: true
    },
    image: require('../assets/placeholders/green_gondollieri.png')
  },
  {
    id: 4,
    name: 'Simmons',
    items: {
      assistPrevent: true,
      reset: true,
      steal: true,
      lock: true,
      unlock: true
    },
    image: require('../assets/placeholders/green_simmons.png')
  }
]

const powers = [
  {
    playerId: 1,
    timelineName: 'Timeline 1',
    name: 'Questing',
    startTime: Date.now(),
    endTime: Date.now() + 100000,
    alliedPlayers: 5,
    enemyPlayers: 4
  },
  {
    playerId: 2,
    timelineName: 'Timeline 1',
    name: 'Resetting',
    startTime: Date.now(),
    endTime: Date.now() + 1000000,
    alliedPlayers: 5,
    enemyPlayers: 4
  },
  {
    playerId: 3,
    timelineName: 'Timeline 1',
    name: 'Combining',
    startTime: Date.now(),
    endTime: Date.now() + 2000000,
    alliedPlayers: 5,
    enemyPlayers: 4
  },
  {
    playerId: 4,
    timelineName: 'Timeline 1',
    name: 'Locking',
    startTime: Date.now(),
    endTime: Date.now() + 100000,
    alliedPlayers: 5,
    enemyPlayers: 4
  }
]

timelines.forEach(t => {
  timelineStore.addTimeline(t.name, t.type)
})

players.forEach(p => {
  playersStore.addPlayer(p)
})

timelineStore.addPlayer('Timeline 1', 1)
timelineStore.addPlayer('Timeline 1', 2)
timelineStore.addPlayer('Timeline 2', 2)
timelineStore.addPlayer('Timeline 3', 2)
timelineStore.addPlayer('Timeline 1', 3)
timelineStore.addPlayer('Timeline 2', 3)
timelineStore.addPlayer('Timeline 3', 3)
timelineStore.addPlayer('Timeline 1', 4)
timelineStore.addPlayer('Timeline 3', 4)

powers.forEach(p => powerStore.addPower(p))

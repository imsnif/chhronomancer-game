import playerStore from '../stores/player'
import timelineStore from '../stores/timeline'
import powerStore from '../stores/power'
import statsStore from '../stores/stats'

const timelines = [
  {name: 'Timeline 1', type: 'steal'},
  {name: 'Timeline 2', type: 'assist'},
  {name: 'Timeline 3', type: 'prevent'},
  {name: 'Timeline 4', type: 'reset'}
]

const players = [
  {
    id: 1,
    name: 'Aram',
    items: {
      assist: false,
      prevent: false,
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
      assist: 'Timeline 2',
      prevent: 'Timeline 3',
      reset: 'Timeline 3',
      steal: 'Timeline 1',
      lock: 'Timeline 1',
      unlock: false
    },
    image: require('../assets/placeholders/green_tom.png')
  },
  {
    id: 3,
    name: 'Gondollieri',
    items: {
      assist: 'Timeline 2',
      prevent: 'Timeline 3',
      reset: 'Timeline 3',
      steal: 'Timeline 1',
      lock: 'Timeline 3',
      unlock: 'Timeline 1'
    },
    image: require('../assets/placeholders/green_gondollieri.png')
  },
  {
    id: 4,
    name: 'Simmons',
    items: {
      assist: 'Timeline 2',
      prevent: false,
      reset: 'Timeline 3',
      steal: 'Timeline 1',
      lock: 'Timeline 2',
      unlock: 'Timeline 2'
    },
    image: require('../assets/placeholders/green_simmons.png')
  }
]

const powers = [
  {
    playerId: 1,
    timelineName: 'Timeline 1',
    name: 'Resetting',
    startTime: Date.now(),
    endTime: Date.now() + 100000,
    target: {
      type: 'timeline',
      name: 'Timeline 1'
    },
    allies: [
      {id: 1, score: 8},
      {id: 2, score: 5}
    ],
    enemies: [
      {id: 3, score: 1},
      {id: 4, score: 9}
    ]
  },
  {
    playerId: 2,
    timelineName: 'Timeline 1',
    name: 'Resetting',
    startTime: Date.now(),
    endTime: Date.now() + 1000000,
    target: {
      type: 'timeline',
      name: 'Timeline 1'
    },
    allies: [
      {id: 2, score: 1},
      {id: 1, score: 5}
    ],
    enemies: [
      {id: 3, score: 1},
      {id: 4, score: 2}
    ]
  },
  {
    playerId: 3,
    timelineName: 'Timeline 1',
    name: 'Combining',
    startTime: Date.now(),
    endTime: Date.now() + 2000000,
    target: {
      type: 'timeline',
      name: 'Timeline 1'
    },
    allies: [
      {id: 3, score: 1},
      {id: 1, score: 2}
    ],
    enemies: [
      {id: 2, score: 2},
      {id: 4, score: 5}
    ]
  },
  {
    playerId: 4,
    timelineName: 'Timeline 1',
    name: 'Locking',
    startTime: Date.now(),
    endTime: Date.now() + 100000,
    target: {
      type: 'timeline',
      name: 'Timeline 1'
    },
    allies: [
      {id: 4, score: 7},
      {id: 2, score: 2}
    ],
    enemies: [
      {id: 2, score: 2},
      {id: 1, score: 5}
    ]
  }
]

timelines.forEach(t => {
  timelineStore.addTimeline(t.name, t.type)
})

players.forEach(p => {
  playerStore.addPlayer(p)
})

statsStore.changePlayerId(1)
statsStore.incrementActions(10)

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

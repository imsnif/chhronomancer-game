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
    items: [
      {name: 'assist', source: false},
      {name: 'prevent', source: 'Timeline 3'},
      {name: 'prevent', source: 'Timeline 3'},
      {name: 'reset', source: 'Timeline 4'},
      {name: 'reset', source: 'Timeline 4'},
      {name: 'steal', source: 'Timeline 1'},
      {name: 'lock', source: false},
      {name: 'unlock', source: false}
    ],
    image: require('../assets/placeholders/green_me.png')
  },
  {
    id: 2,
    name: 'Tom',
    items: [
      {name: 'assist', source: 'Timeline 2'},
      {name: 'prevent', source: 'Timeline 3'},
      {name: 'reset', source: 'Timeline 3'},
      {name: 'steal', source: 'Timeline 1'},
      {name: 'lock', source: 'Timeline 1'},
      {name: 'unlock', source: false}
   ],
    image: require('../assets/placeholders/green_tom.png')
  },
  {
    id: 3,
    name: 'Gondollieri',
    items: [
      {name: 'assist', source: 'Timeline 2'},
      {name: 'prevent', source: 'Timeline 3'},
      {name: 'reset', source: 'Timeline 3'},
      {name: 'steal', source: 'Timeline 1'},
      {name: 'lock', source: 'Timeline 3'},
      {name: 'unlock', source: 'Timeline 1'}
    ],
    image: require('../assets/placeholders/green_gondollieri.png')
  },
  {
    id: 4,
    name: 'Simmons',
    items: [
      {name: 'assist', source: 'Timeline 2'},
      {name: 'prevent', source: false},
      {name: 'reset', source: 'Timeline 3'},
      {name: 'steal', source: 'Timeline 1'},
      {name: 'lock', source: 'Timeline 2'},
      {name: 'unlock', source: 'Timeline 2'}
    ],
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

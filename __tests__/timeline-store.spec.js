import moment from 'moment'
import renderer from 'react-test-renderer'

const staticTime = 1492347672000

beforeEach(() => {
  jest.resetModules()
})

test('TimelineStore => is constructed properly', () => {
  const timelineStore = require('../stores/timeline').default
  const players = timelineStore.players.map(p => p)
  expect(players).toEqual([])
})

test('TimelineStore => can add a player', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.addPlayer(1)
  const players = timelineStore.players.map(p => p)
  expect(players).toEqual([1])
})

test('TimelineStore => can remove a player', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.addPlayer(1)
  timelineStore.removePlayer(1)
  const players = timelineStore.players.map(p => p)
  expect(players).toEqual([])
})

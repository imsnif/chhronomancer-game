import moment from 'moment'
import renderer from 'react-test-renderer'

beforeEach(() => {
  jest.resetModules()
})

test('TimelineStore => is constructed properly', () => {
  const timelineStore = require('../stores/timeline').default
  const timelines = timelineStore.timelines.map(p => p)
  const { sortBy } = timelineStore
  expect(timelines).toEqual([])
})

test('TimelineStore => can add a timeline', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.addTimeline('Timeline 1', 'steal')
  const timelines = timelineStore.timelines.map(p => p)
  expect(timelines).toMatchSnapshot()
})

test('TimelineStore => can add a player to a timeline', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.addTimeline('Timeline 1', 'steal')
  const timelines = timelineStore.timelines.map(p => p)
  timelineStore.addPlayer('Timeline 1', 1)
  const { players } = timelineStore.getTimeline('Timeline 1')
  expect(players).toMatchSnapshot()
})

test('TimelineStore => can remove a player', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.addTimeline('Timeline 1', 'steal')
  const timelines = timelineStore.timelines.map(p => p)
  timelineStore.addPlayer('Timeline 1', 1)
  timelineStore.removePlayer('Timeline 1', 1)
  const { players } = timelineStore.getTimeline('Timeline 1')
  expect(players).toMatchSnapshot()
})

test('TimelineStore => can change sort', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.addTimeline('Timeline 1', 'steal')
  const timelines = timelineStore.timelines.map(p => p)
  timelineStore.changeSort('Timeline 1', 'type')
  const { sortBy } = timelineStore.getTimeline('Timeline 1')
  expect(sortBy).toEqual('type')
})

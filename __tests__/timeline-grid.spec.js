import 'react-native'
import React from 'react'
import TimelineGrid from '../components/timeline-grid'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('TimelineGrid (one timeline) => renders correctly', () => {
  const timeline1 = {
    name: 'Timeline 1',
    type: 'steal',
    players: [1, 2]
  }
  const getTimeline = jest.fn().mockReturnValue(timeline1)
  const playersStore = {
    players: [
      {id: 1, name: 'foo', items: {}},
      {id: 2, name: 'bar', items: {}}
    ]
  }
  const tree = renderer.create(
    <TimelineGrid
      playersStore={playersStore}
      timelineStore={{getTimeline, timelines: [timeline1]}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TimelineGrid (multiple timelines) => renders correctly', () => {
  const timeline1 = {
    name: 'Timeline 1',
    type: 'steal',
    players: [1, 2]
  }
  const timeline2 = {
    name: 'Timeline 2',
    type: 'assistPrevent',
    players: [1]
  }
  const getTimeline = jest.fn()
    .mockReturnValueOnce(timeline1)
    .mockReturnValueOnce(timeline2)
  const playersStore = {
    players: [
      {id: 1, name: 'foo', items: {}},
      {id: 2, name: 'bar', items: {}}
    ]
  }
  const tree = renderer.create(
    <TimelineGrid
      playersStore={playersStore}
      timelineStore={{getTimeline, timelines: [timeline1, timeline2]}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TimelineGrid (no timelines) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({players: []})
  const playersStore = {
    players: [
      {id: 1, name: 'foo', items: {}},
      {id: 2, name: 'bar', items: {}}
    ]
  }
  const tree = renderer.create(
    <TimelineGrid
      playersStore={playersStore}
      timelineStore={{timelines: [], getTimeline}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import TimelineSummary from '../components/timeline-summary'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('TimelineSummary (steal) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({
    name: 'Timeline 1',
    type: 'steal',
    players: [1, 2]
  })
  const playersStore = {
    players: [
      {id: 1, name: 'foo', items: {}},
      {id: 2, name: 'bar', items: {}}
    ]
  }
  const tree = renderer.create(
    <TimelineSummary
      name='Timeline 1'
      type='steal'
      playersStore={playersStore}
      timelineStore={{getTimeline}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TimelineSummary (assistPrevent) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({
    name: 'Timeline 1',
    type: 'assistPrevent',
    players: [1, 2]
  })
  const playersStore = {
    players: [
      {id: 1, name: 'foo', items: {}},
      {id: 2, name: 'bar', items: {}}
    ]
  }
  const tree = renderer.create(
    <TimelineSummary
      name='Timeline 1'
      type='steal'
      playersStore={playersStore}
      timelineStore={{getTimeline}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TimelineSummary (reset) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({
    name: 'Timeline 1',
    type: 'reset',
    players: [1, 2]
  })
  const playersStore = {
    players: [
      {id: 1, name: 'foo', items: {}},
      {id: 2, name: 'bar', items: {}}
    ]
  }
  const tree = renderer.create(
    <TimelineSummary
      name='Timeline 1'
      type='steal'
      playersStore={playersStore}
      timelineStore={{getTimeline}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

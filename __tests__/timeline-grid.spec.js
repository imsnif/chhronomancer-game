import 'react-native'
import React from 'react'
import TimelineGrid from '../components/timeline-grid'
import renderer from 'react-test-renderer'
import serverMock from '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  serverMock()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('TimelineGrid => renders correctly', () => {
  const tree = renderer.create(
    <TimelineGrid />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import serverMock from '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
  serverMock()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Power progress indicator => renders correctly', () => {
  const timelineName = 'Timeline 1'
  const playerId = 1
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power playerId={playerId} timelineName={timelineName} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

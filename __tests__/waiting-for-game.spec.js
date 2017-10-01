import 'react-native'
import React from 'react'
import serverMock from '../server-mock'
import renderer from 'react-test-renderer'

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

test('WaitingForGame component (with server mock) => renders correctly', () => {
  const WaitingForGame = require('../components/waiting-for-game').default
  const statsStore = require('../stores/stats').default
  statsStore.changePlayerId(1)
  const tree = renderer.create(
    <WaitingForGame />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

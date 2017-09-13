import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
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
  require('../server-mock') // TODO: export a function like a normal Human being
  statsStore.changePlayerId(1)
  const tree = renderer.create(
    <WaitingForGame />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

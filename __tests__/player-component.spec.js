import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import { navigatorMock } from '../test-utils'

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

test('Player component => renders correctly', () => {
  const timelineName = 'Timeline 1'
  const playerId = 1
  const Player = require('../components/player').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <Player timelineName={timelineName} id={playerId} navigator={navigatorMock()} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player component => renders correctly without active power', () => {
  const timelineName = 'Timeline 2'
  const playerId = 2
  const Player = require('../components/player').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <Player timelineName={timelineName} id={playerId} navigator={navigatorMock()} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

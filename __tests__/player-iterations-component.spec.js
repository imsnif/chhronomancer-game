import 'react-native'
import React from 'react'
import serverMock from '../server-mock'
import renderer from 'react-test-renderer'
import { navigatorMock } from '../test-utils'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

beforeEach(() => {
  serverMock()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Player Iterations => renders correctly', () => {
  const PlayerIterations = require('../components/player-iterations').default
  const tree = renderer.create(
    <PlayerIterations navigator={navigatorMock()} playerId={1} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

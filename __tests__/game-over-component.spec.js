import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import serverMock from '../server-mock'
import { navigatorMock } from '../test-utils'
import statsStore from '../stores/stats'

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
  statsStore.clearWinner()
})

test('GameOver (with winner) => renders correctly', () => {
  statsStore.announceWinner(1)
  const GameOver = require('../components/game-over').default
  const tree = renderer.create(
    <GameOver navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GameOver (no winner) => renders empty', () => {
  statsStore.clearWinner()
  const GameOver = require('../components/game-over').default
  const tree = renderer.create(
    <GameOver navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

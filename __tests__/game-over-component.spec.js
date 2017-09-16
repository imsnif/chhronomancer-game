import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import { navigatorMock } from '../test-utils'
import statsStore from '../stores/stats'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
  statsStore.clearWinner()
})

test('GameOver (with winner) => renders correctly', () => {
  require('../server-mock') // TODO: export a function like a normal Human being
  statsStore.announceWinner(1)
  const GameOver = require('../components/game-over').default
  const tree = renderer.create(
    <GameOver navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GameOver (no winner) => renders empty', () => {
  require('../server-mock') // TODO: export a function like a normal Human being
  statsStore.clearWinner()
  const GameOver = require('../components/game-over').default
  const tree = renderer.create(
    <GameOver navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

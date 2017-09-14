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

test('Game component (character-sheet) => renders correctly', () => {
  const Game = require('../components/game').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <Game screenName='character-sheet' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Game component (timeline-grid) => renders correctly', () => {
  const Game = require('../components/game').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <Game screenName='timeline-grid' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

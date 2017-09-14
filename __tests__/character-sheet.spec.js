import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Character-Sheet (default props) => renders correctly', () => {
  require('../server-mock')
  const CharacterSheet = require('../components/character-sheet').default
  const tree = renderer.create(
    <CharacterSheet />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Character-Sheet (no player) => renders empty', () => {
  require('../server-mock')
  const CharacterSheet = require('../components/character-sheet').default
  const statsStore = require('../stores/stats').default
  statsStore.changePlayerId('foo')
  const tree = renderer.create(
    <CharacterSheet />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

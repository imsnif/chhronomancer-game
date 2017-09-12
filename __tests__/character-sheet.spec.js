import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Character-Sheet (default props) => renders correctly', () => {
  const CharacterSheet = require('../components/character-sheet').default
  const tree = renderer.create(
    <CharacterSheet />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

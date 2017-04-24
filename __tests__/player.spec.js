import 'react-native'
import React from 'react'
import Player from '../components/player'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

test('Player (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Player clockStore={{time: 1}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player (with items) => renders correctly', () => {
  const tree = renderer.create(
    <Player
      clockStore={{time: 1}}
      items={{
        red: true,
        purple: true,
        black: true
      }}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player (with activePower) => renders correctly', () => {
  const tree = renderer.create(
    <Player
      clockStore={{time: 10200}}
      activePower={{
        name: 'PowerName',
        startTime: 10000,
        endTime: 20000,
        alliedPlayers: 3,
        enemyPlayers: 4
      }}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player (with activePower and items) => renders correctly', () => {
  const tree = renderer.create(
    <Player
      clockStore={{time: 10200}}
      activePower={{
        name: 'PowerName',
        startTime: 10000,
        endTime: 20000,
        alliedPlayers: 3,
        enemyPlayers: 4
      }}
      items={{
        red: true,
        purple: true,
        black: true
      }}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

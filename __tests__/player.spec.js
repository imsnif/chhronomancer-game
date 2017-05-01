import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

test('Player (no items or power) => renders correctly', () => {
  const Player = require('../components/player').default
  const tree = renderer.create(
    <Player id={1} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player (with items and no power) => renders correctly', () => {
  const Player = require('../components/player').default
  const tree = renderer.create(
    <Player id={2} timelineName='Timeline 2' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player (with items and power) => renders correctly', () => {
  const Player = require('../components/player').default
  const tree = renderer.create(
    <Player id={2} timelineName='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import Power from '../components/power'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

test('Power (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Power />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Power (with progress) => renders correctly', () => {
  const tree = renderer.create(
    <Power progress={50}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Power (with timeLeft) => renders correctly', () => {
  const tree = renderer.create(
    <Power timeLeft={'00:00:25'}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Power (with allied/enemy players) => renders correctly', () => {
  const tree = renderer.create(
    <Power alliedPlayers={1} enemyPlayers={3}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Power (with progress, timeLeft and allied/enemy players) => renders correctly', () => {
  const tree = renderer.create(
    <Power progress={50} timeLeft={'00:00:25'} alliedPlayers={1} enemyPlayers={3}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

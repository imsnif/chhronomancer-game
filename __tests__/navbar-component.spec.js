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

test('Navbar (character-sheet) => renders correctly', () => {
  require('../server-mock') // TODO: export a function like a normal Human being
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'character-sheet'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (timeline-grid) => renders correctly', () => {
  require('../server-mock') // TODO: export a function like a normal Human being
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'timeline-grid'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (different route) => renders correctly', () => {
  require('../server-mock') // TODO: export a function like a normal Human being
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (winner declared) => renders correctly', () => {
  require('../server-mock') // TODO: export a function like a normal Human being
  statsStore.announceWinner(1)
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

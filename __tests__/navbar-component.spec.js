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

test('Navbar (character-sheet) => renders correctly', () => {
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'character-sheet'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (timeline-grid) => renders correctly', () => {
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'timeline-grid'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (timeline-grid) => renders correctly', () => {
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'feed'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (different route) => renders correctly', () => {
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Navbar (winner declared) => renders correctly', () => {
  statsStore.announceWinner(1)
  const NavBar = require('../components/navbar').default
  const tree = renderer.create(
    <NavBar navigator={navigatorMock({screenName: 'foo'})} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

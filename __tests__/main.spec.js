import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import serverMock from '../server-mock'
import { mockFB } from '../test-utils'

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
})

test('Main component (with server mock) => renders correctly', () => {
  const Chronomancer = require('../components/main').default
  const statsStore = require('../stores/stats').default
  statsStore.changePlayerId(1)
  const tree = renderer.create(
    <Chronomancer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Main component (with server mock) => renders correctly - Waiting For Game', () => {
  const Chronomancer = require('../components/main').default
  const statsStore = require('../stores/stats').default
  statsStore.connect()
  statsStore.changePlayerId('foo')
  const tree = renderer.create(
    <Chronomancer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Main component (with server mock) => renders correctly - Login page', () => {
  jest.resetModules()
  const statsStore = require('../stores/stats').default
  const Chronomancer = require('../components/main').default
  const FBLogin = mockFB()
  statsStore.changePlayerId('foo')
  statsStore.disconnect()
  renderer.create(
    <Chronomancer />
  ).toJSON()
  expect(FBLogin.mock.calls).toMatchSnapshot()
})

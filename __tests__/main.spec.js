import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

function mockFB () { // TODO: move to utils
  const login = require('react-native-facebook-login')
  const FBLogin = jest.fn()
  FBLogin.mockReturnValue(null)
  login.FBLogin = FBLogin
  login.FBLoginManager = {LoginBehaviors: {Web: 2}}
  return FBLogin
}

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

test('Main component (with server mock) => renders correctly', () => {
  const Chronomancer = require('../components/main').default
  const statsStore = require('../stores/stats').default
  require('../server-mock') // TODO: export a function like a normal Human being
  statsStore.changePlayerId(1)
  const tree = renderer.create(
    <Chronomancer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Main component (with server mock) => renders correctly - Waiting For Game', () => {
  const Chronomancer = require('../components/main').default
  const statsStore = require('../stores/stats').default
  require('../server-mock')
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
  require('../server-mock')
  statsStore.changePlayerId('foo')
  statsStore.disconnect()
  renderer.create(
    <Chronomancer />
  ).toJSON()
  expect(FBLogin.mock.calls).toMatchSnapshot()
})

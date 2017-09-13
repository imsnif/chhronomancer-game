import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { mockFB } from '../test-utils'

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

test('Login component (with server mock) => renders correctly', () => {
  jest.resetModules()
  const Login = require('../components/login').default
  const FBLogin = mockFB()
  require('../server-mock')
  renderer.create(
    <Login />
  ).toJSON()
  expect(FBLogin.mock.calls).toMatchSnapshot()
})

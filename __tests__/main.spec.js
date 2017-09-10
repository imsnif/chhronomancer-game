import 'react-native'
import '../server-mock'
import React from 'react'
import Chronomancer from '../components/main'
import renderer from 'react-test-renderer'

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
  const tree = renderer.create(
    <Chronomancer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

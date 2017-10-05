import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import serverMock from '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

beforeEach(() => {
  serverMock()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Feed => renders correctly', () => {
  const Feed = require('../components/feed').default
  const tree = renderer.create(
    <Feed />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

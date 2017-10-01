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

test('Bidding (default props) => renders correctly', () => {
  const Bidding = require('../components/bidding').default
  const tree = renderer.create(
    <Bidding playerId={1} timelineName='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { navigatorMock } from '../test-utils'

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

test('TimelineSummary => renders correctly', () => {
  const timelineName = 'Timeline 1'
  const TimelineSummary = require('../components/timeline-summary').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <TimelineSummary name={timelineName} navigator={navigatorMock()} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Timeline (with multiple players - default sort) => renders correctly', () => {
  const Timeline = require('../components/timeline').default
  const tree = renderer.create(
    <Timeline name='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Timeline (with multiple players - power type sort) => renders correctly', () => {
  const Timeline = require('../components/timeline').default
  const timelineStore = require('../stores/timeline').default
  timelineStore.changeSort('Timeline 1', 1)
  const tree = renderer.create(
    <Timeline name='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Timeline (with multiple players - power time left sort) => renders correctly', () => {
  const Timeline = require('../components/timeline').default
  const timelineStore = require('../stores/timeline').default
  timelineStore.changeSort('Timeline 1', 2)
  const tree = renderer.create(
    <Timeline name='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

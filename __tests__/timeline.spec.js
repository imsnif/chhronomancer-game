import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

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
  timelineStore.changeSort('Timeline 1', 'type')
  const tree = renderer.create(
    <Timeline name='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Timeline (with multiple players - power time left sort) => renders correctly', () => {
  const Timeline = require('../components/timeline').default
  const timelineStore = require('../stores/timeline').default
  timelineStore.changeSort('Timeline 1', 'time')
  const tree = renderer.create(
    <Timeline name='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

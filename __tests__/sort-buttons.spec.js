import 'react-native'
import React from 'react'
import SortButtons from '../components/sort-buttons'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('SortButtons (sortBy player) => renders correctly', () => {
  const tree = renderer.create(
    <SortButtons timelineName='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy type) => renders correctly', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.changeSort('Timeline 1', 'type')
  const tree = renderer.create(
    <SortButtons timelineName='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy time) => renders correctly', () => {
  const timelineStore = require('../stores/timeline').default
  timelineStore.changeSort('Timeline 1', 'time')
  const tree = renderer.create(
    <SortButtons timelineName='Timeline 1' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

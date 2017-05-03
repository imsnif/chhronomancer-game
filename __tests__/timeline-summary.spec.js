import 'react-native'
import React from 'react'
import TimelineSummary from '../components/timeline-summary'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('TimelineSummary (steal) => renders correctly', () => {
  const tree = renderer.create(
    <TimelineSummary
      name='Timeline 1'
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TimelineSummary (assistPrevent) => renders correctly', () => {
  const tree = renderer.create(
    <TimelineSummary
      name='Timeline 2'
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TimelineSummary (reset) => renders correctly', () => {
  const tree = renderer.create(
    <TimelineSummary
      name='Timeline 3'
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

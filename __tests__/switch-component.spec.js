import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('Switch (two options) => renders correctly', () => {
  const Switch = require('../components/switch').default
  const tree = renderer.create(
    <Switch selected={0} options={[
      {action: () => {}, text: 'foo'},
      {action: () => {}, text: 'bar'}
    ]} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Switch (three options) => renders correctly', () => {
  const Switch = require('../components/switch').default
  const tree = renderer.create(
    <Switch selected={2} options={[
      {action: () => {}, text: 'foo'},
      {action: () => {}, text: 'bar'},
      {action: () => {}, text: 'baz'}
    ]} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

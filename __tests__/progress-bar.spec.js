import { Text } from 'react-native'
import React from 'react'
import ProgressBar from '../components/progress-bar'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('ProgressBar (default props) => renders correctly', () => {
  const tree = renderer.create(
    <ProgressBar />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ProgressBar (with progress) => renders correctly', () => {
  const tree = renderer.create(
    <ProgressBar progress={50}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ProgressBar (with children) => renders correctly', () => {
  const tree = renderer.create(
    <ProgressBar>
      <Text>foo</Text>
    </ProgressBar>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ProgressBar (with progress and children) => renders correctly', () => {
  const tree = renderer.create(
    <ProgressBar progress={50}>
      <Text>foo</Text>
    </ProgressBar>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

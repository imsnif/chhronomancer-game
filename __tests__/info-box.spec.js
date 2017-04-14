import 'react-native'
import React from 'react'
import InfoBox from '../components/info-box'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('InfoBox (default props) => renders correctly', () => {
  const tree = renderer.create(
    <InfoBox />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InfoBox (with title) => renders correctly', () => {
  const tree = renderer.create(
    <InfoBox title='foo' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InfoBox (with image) => renders correctly', () => {
  const tree = renderer.create(
    <InfoBox image={require('../assets/placeholders/me.jpeg')} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InfoBox (with title and image) => renders correctly', () => {
  const tree = renderer.create(
    <InfoBox title='foo' image={require('../assets/placeholders/me.jpeg')} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

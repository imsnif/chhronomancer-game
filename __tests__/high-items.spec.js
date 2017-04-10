import 'react-native'
import React from 'react'
import HighItems from '../components/high-items'
import renderer from 'react-test-renderer'

test('HighItems (default props) => renders correctly', () => {
  const tree = renderer.create(
    <HighItems />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('HighItems (with black item) => renders correctly', () => {
  const tree = renderer.create(
    <HighItems items={{black: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

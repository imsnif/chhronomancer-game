import 'react-native'
import React from 'react'
import MidItems from '../components/mid-items'
import renderer from 'react-test-renderer'

test('MidItems (default props) => renders correctly', () => {
  const tree = renderer.create(
    <MidItems />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MidItems (with purple item) => renders correctly', () => {
  const tree = renderer.create(
    <MidItems items={{purple: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MidItems (with brown item) => renders correctly', () => {
  const tree = renderer.create(
    <MidItems items={{brown: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MidItems (with purple and brown items) => renders correctly', () => {
  const tree = renderer.create(
    <MidItems items={{purple: true, brown: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

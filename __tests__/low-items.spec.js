import 'react-native'
import React from 'react'
import LowItems from '../components/low-items'
import renderer from 'react-test-renderer'

test('LowItems (default props) => renders correctly', () => {
  const tree = renderer.create(
    <LowItems />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with red item) => renders correctly', () => {
  const tree = renderer.create(
    <LowItems items={{red: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with green item) => renders correctly', () => {
  const tree = renderer.create(
    <LowItems items={{green: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with blue item) => renders correctly', () => {
  const tree = renderer.create(
    <LowItems items={{blue: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with red, green and blue items) => renders correctly', () => {
  const tree = renderer.create(
    <LowItems items={{red: true, green: true, blue: true}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

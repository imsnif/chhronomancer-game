import 'react-native'
import React from 'react'
import Item from '../components/item'
import renderer from 'react-test-renderer'

test('Item (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Item />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Item (with name) => renders correctly', () => {
  const tree = renderer.create(
    <Item name='assistPrevent' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Item (with fill) => renders correctly', () => {
  const tree = renderer.create(
    <Item fill />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Item (with name and fill) => renders correctly', () => {
  const tree = renderer.create(
    <Item name='assistPrevent' fill />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

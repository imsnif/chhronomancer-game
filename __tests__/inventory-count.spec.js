import 'react-native'
import React from 'react'
import InventoryCount from '../components/inventory-count'
import renderer from 'react-test-renderer'

test('InventoryCount (default props) => renders correctly', () => {
  const tree = renderer.create(
    <InventoryCount />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InventoryCount (with count) => renders correctly', () => {
  const tree = renderer.create(
    <InventoryCount count={1} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

test('Inventory-Count component => renders correctly', () => {
  const InventoryCount = require('../components/inventory-count').default
  const tree = renderer.create(
    <InventoryCount count={4} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

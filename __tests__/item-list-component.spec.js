import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

const items = [
  { name: 'assist', source: false, count: 1 },
  { name: 'prevent', source: 'Timeline 3', count: 2 },
  { name: 'reset', source: 'Timeline 4', count: 2 },
  { name: 'steal', source: 'Timeline 1', count: 1 },
  { name: 'lock', source: false },
  { name: 'unlock', source: false, count: 0 }
]

test('Item list => renders correctly', () => {
  const ItemList = require('../components/item-list').default
  const tree = renderer.create(
    <ItemList itemCount={6} items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

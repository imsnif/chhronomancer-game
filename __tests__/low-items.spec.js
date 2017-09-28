import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

test('Low-Items component => renders correctly', () => {
  const LowItems = require('../components/low-items').default
  const items = [
    {fill: true, name: 'assist', bright: true},
    {fill: true, name: 'prevent', bright: true},
    {fill: true, name: 'reset', bright: false}
  ]
  const tree = renderer.create(
    <LowItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

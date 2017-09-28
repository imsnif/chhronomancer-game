import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

test('Mid-Items component => renders correctly', () => {
  const MidItems = require('../components/mid-items').default
  const items = [
    {fill: true, name: 'lock', bright: true}
  ]
  const tree = renderer.create(
    <MidItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

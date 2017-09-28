import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

test('Item component => renders correctly', () => {
  const Item = require('../components/item').default
  const tree = renderer.create(
    <Item fill bright name='assist' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Item component => renders correctly with onPress', () => {
  const Item = require('../components/item').default
  const tree = renderer.create(
    <Item fill bright name='assist' onPress={() => {}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

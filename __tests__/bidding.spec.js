import 'react-native'
import React from 'react'
import Bidding from '../components/bidding'
import renderer from 'react-test-renderer'

test('Bidding (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Bidding />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('Vertical Separator => renders correctly', () => {
  const HorizontalSeparator = require('../components/vertical-separator').default
  const tree = renderer.create(
    <HorizontalSeparator length={42} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

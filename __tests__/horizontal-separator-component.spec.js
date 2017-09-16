import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('Horizontal Separator => renders correctly', () => {
  const HorizontalSeparator = require('../components/horizontal-separator').default
  const tree = renderer.create(
    <HorizontalSeparator length={42} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

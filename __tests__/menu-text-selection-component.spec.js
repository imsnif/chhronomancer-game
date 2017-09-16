import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('MenuTextSelection (selected) => renders correctly', () => {
  const MenuTextSelection = require('../components/menu-text-selection').default
  const tree = renderer.create(
    <MenuTextSelection
      onPress={() => {}}
      text='foo'
      selected
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MenuTextSelection (unselected) => renders correctly', () => {
  const MenuTextSelection = require('../components/menu-text-selection').default
  const tree = renderer.create(
    <MenuTextSelection
      onPress={() => {}}
      text='foo'
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

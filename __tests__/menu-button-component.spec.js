import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('MenuButton => renders correctly', () => {
  const MenuButton = require('../components/menu-button').default
  const tree = renderer.create(
    <MenuButton
      onPress={() => {}}
      title='foo'
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MenuButton (pressed) => renders correctly', () => {
  const MenuButton = require('../components/menu-button').default
  const tree = renderer.create(
    <MenuButton
      pressStatus
      onPress={() => {}}
      title='foo'
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

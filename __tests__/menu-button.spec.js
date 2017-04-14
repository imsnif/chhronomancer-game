import 'react-native'
import React from 'react'
import MenuButton from '../components/menu-button'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('MenuButton (default props) => renders correctly', () => {
  const tree = renderer.create(
    <MenuButton />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MenuButton (with title) => renders correctly', () => {
  const tree = renderer.create(
    <MenuButton title='foo' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

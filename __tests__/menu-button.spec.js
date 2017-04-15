import 'react-native'
import React from 'react'
import MenuButton from '../components/menu-button'
import { shallow } from 'enzyme'
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

test('MenuButton => changes color while finger is held down', () => {
  const wrapper = shallow(
    <MenuButton title='foo' />
  )
  wrapper.find('TouchableHighlight').simulate('showUnderlay')
  expect(wrapper.find('TouchableHighlight').props().style).toMatchSnapshot()
  wrapper.find('TouchableHighlight').simulate('hideUnderlay')
  expect(wrapper.find('TouchableHighlight').props().style).toMatchSnapshot()
})

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SortButtons from '../components/sort-buttons'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('SortButtons (sortBy player) => renders correctly', () => {
  const tree = renderer.create(
    <SortButtons timelineStore={{sortBy: 'player'}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy type) => renders correctly', () => {
  const tree = renderer.create(
    <SortButtons timelineStore={{sortBy: 'type'}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy time) => renders correctly', () => {
  const tree = renderer.create(
    <SortButtons timelineStore={{sortBy: 'time'}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy player) => press player', () => {
  const changeSort = jest.fn()
  const wrapper = shallow(
    <SortButtons timelineStore={{sortBy: 'player', changeSort}}/>
  )
  const button = wrapper.find('TouchableHighlight').at(0)
  button.simulate('press')
  expect(changeSort).toBeCalledWith('player')
})

test('SortButtons (sortBy type) => press type', () => {
  const changeSort = jest.fn()
  const wrapper = shallow(
    <SortButtons timelineStore={{sortBy: 'player', changeSort}}/>
  )
  const button = wrapper.find('TouchableHighlight').at(1)
  button.simulate('press')
  expect(changeSort).toBeCalledWith('type')
})

test('SortButtons (sortBy time) => press time', () => {
  const changeSort = jest.fn()
  const wrapper = shallow(
    <SortButtons timelineStore={{sortBy: 'player', changeSort}}/>
  )
  const button = wrapper.find('TouchableHighlight').at(2)
  button.simulate('press')
  expect(changeSort).toBeCalledWith('time')
})

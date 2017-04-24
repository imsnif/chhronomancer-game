import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SortButtons from '../components/sort-buttons'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('SortButtons (sortBy player) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({sortBy: 'player'})
  const tree = renderer.create(
    <SortButtons timelineStore={{sortBy: 'player', getTimeline}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy type) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({sortBy: 'player'})
  const tree = renderer.create(
    <SortButtons timelineStore={{sortBy: 'type', getTimeline}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy time) => renders correctly', () => {
  const getTimeline = jest.fn().mockReturnValue({sortBy: 'player'})
  const tree = renderer.create(
    <SortButtons timelineStore={{sortBy: 'time', getTimeline}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortButtons (sortBy player) => press player', () => {
  const getTimeline = jest.fn().mockReturnValue({sortBy: 'player'})
  const changeSort = jest.fn()
  const wrapper = shallow(
    <SortButtons
      timelineName='Timeline 1'
      timelineStore={{sortBy: 'player', changeSort, getTimeline}}
    />
  )
  const button = wrapper.find('TouchableHighlight').at(0)
  button.simulate('press')
  expect(changeSort).toBeCalledWith('Timeline 1', 'player')
})

test('SortButtons (sortBy type) => press type', () => {
  const getTimeline = jest.fn().mockReturnValue({sortBy: 'player'})
  const changeSort = jest.fn()
  const wrapper = shallow(
    <SortButtons
      timelineName='Timeline 1'
      timelineStore={{sortBy: 'player', changeSort, getTimeline}}
    />
  )
  const button = wrapper.find('TouchableHighlight').at(1)
  button.simulate('press')
  expect(changeSort).toBeCalledWith('Timeline 1', 'type')
})

test('SortButtons (sortBy time) => press time', () => {
  const getTimeline = jest.fn().mockReturnValue({sortBy: 'player'})
  const changeSort = jest.fn()
  const wrapper = shallow(
    <SortButtons
      timelineName='Timeline 1'
      timelineStore={{sortBy: 'player', changeSort, getTimeline}}
    />
  )
  const button = wrapper.find('TouchableHighlight').at(2)
  button.simulate('press')
  expect(changeSort).toBeCalledWith('Timeline 1', 'time')
})

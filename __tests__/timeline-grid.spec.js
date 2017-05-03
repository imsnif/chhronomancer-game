import 'react-native'
import React from 'react'
import TimelineGrid from '../components/timeline-grid'
import renderer from 'react-test-renderer'
import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('TimelineGrid => renders correctly', () => {
  const playersStore = require('../stores/players').default
  const tree = renderer.create(
    <TimelineGrid
      playersStore={playersStore}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

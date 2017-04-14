import 'react-native'
import React from 'react'
import Timeline from '../components/timeline'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('ProgressBar (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: []}}
      playersStore={{players: []}}
      clockStore={{time: 1}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ProgressBar (with one player) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: [1]}}
      playersStore={{
        players: [
          {
            id: 1,
            name: 'foo',
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          }
        ]
      }}
      clockStore={{time: 1}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

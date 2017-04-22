import 'react-native'
import React from 'react'
import Timeline from '../components/timeline'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

test('Timeline (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: []}}
      playersStore={{players: []}}
      clockStore={{time: 1}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Timeline (with one player) => renders correctly', () => {
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

test('Timeline (with multiple players - player name sort) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: [1, 2, 3], sortBy: 'player'}}
      playersStore={{
        players: [
          {
            id: 1,
            name: 'foo',
            activePower: {
              name: 'power1',
              timeLeft: 54321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 2,
            name: 'bar',
            activePower: {
              name: 'power2',
              timeLeft: 42321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 3,
            name: 'baz',
            activePower: {
              name: 'power3',
              timeLeft: 92321
            },
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

test('Timeline (with multiple players - power type sort) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: [1, 2, 3], sortBy: 'type'}}
      playersStore={{
        players: [
          {
            id: 1,
            name: 'foo',
            activePower: {
              name: 'power1',
              timeLeft: 54321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 2,
            name: 'bar',
            activePower: {
              name: 'power2',
              timeLeft: 42321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 3,
            name: 'baz',
            activePower: {
              name: 'power3',
              timeLeft: 92321
            },
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

test('Timeline (with multiple players - power type sort with missing powers shows powers first) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: [1, 2, 3], sortBy: 'type'}}
      playersStore={{
        players: [
          {
            id: 1,
            name: 'foo',
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 2,
            name: 'bar',
            activePower: {
              name: 'power2',
              timeLeft: 42321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 3,
            name: 'baz',
            activePower: {
              name: 'power3',
              timeLeft: 92321
            },
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

test('Timeline (with multiple players - power time sort) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: [1, 2, 3], sortBy: 'type'}}
      playersStore={{
        players: [
          {
            id: 1,
            name: 'foo',
            activePower: {
              name: 'power1',
              timeLeft: 54321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 2,
            name: 'bar',
            activePower: {
              name: 'power2',
              timeLeft: 42321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 3,
            name: 'baz',
            activePower: {
              name: 'power3',
              timeLeft: 92321
            },
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

test('Timeline (with multiple players - power time sort with missing powers shows powers first) => renders correctly', () => {
  const tree = renderer.create(
    <Timeline
      timelineStore={{players: [1, 2, 3], sortBy: 'type'}}
      playersStore={{
        players: [
          {
            id: 1,
            name: 'foo',
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 2,
            name: 'bar',
            activePower: {
              name: 'power2',
              timeLeft: 42321
            },
            image: require('../assets/placeholders/me.jpeg'),
            items: {}
          },
          {
            id: 3,
            name: 'baz',
            activePower: {
              name: 'power3',
              timeLeft: 92321
            },
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

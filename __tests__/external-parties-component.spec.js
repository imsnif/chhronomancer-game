import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('ExternalParties component => renders correctly', () => {
  const ExternalParties = require('../components/external-parties').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <ExternalParties
      name='foo'
      total={2}
      image={{uri: 'http://foo.bar/baz'}}
      parties={[{id: 1, score: 2}]}
      onPress={() => {}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

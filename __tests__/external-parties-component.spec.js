import React from 'react'
import 'react-native'
import serverMock from '../server-mock'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
  serverMock()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('ExternalParties component => renders correctly', () => {
  const ExternalParties = require('../components/external-parties').default
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

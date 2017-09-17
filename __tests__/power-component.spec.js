import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

jest.useFakeTimers()

test('Power progress indicator => renders correctly', () => {
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

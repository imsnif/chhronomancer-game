import { Text } from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('Control Panel => renders correctly', () => {
  const ControlPanel = require('../components/control-panel').default
  const tree = renderer.create(
    <ControlPanel>
      <Text>foo</Text>
      <Text>bar</Text>
    </ControlPanel>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

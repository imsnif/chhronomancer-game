import 'react-native'
import React from 'react'
import ExternalParties from '../components/external-parties'
import renderer from 'react-test-renderer'
import image from '../assets/placeholders/green_me.png'

import playersStore from '../stores/players'
import powerStore from '../stores/power'

import '../server-mock'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.useFakeTimers()

test('ExternalParties (default props) => renders correctly', () => {
  const player = playersStore.getPlayer(1)
  const power = powerStore.getPower(1, 'Timeline 1')
  const total = power.allies.map(a => a.score).reduce((a, b) => a + b, 0)
  const tree = renderer.create(
    <ExternalParties
      name={player.name}
      total={total}
      image={image}
      parties={power.allies}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

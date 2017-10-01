import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  const timelineStore = require('../stores/timeline').default
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
  timelineStore.clearAllModals()
})

test('Steal Modal component => renders correctly when open', () => {
  const timelineName = 'Timeline 1'
  const StealModal = require('../components/steal-modal').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const timelineStore = require('../stores/timeline').default
  timelineStore.addModal(timelineName, {
    modalType: 'steal',
    itemName: 'assist',
    playerName: 'foo'
  })
  const tree = renderer.create(
    <StealModal timelineName={timelineName} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Steal Modal component => renders correctly when closed', () => {
  const timelineName = 'Timeline 1'
  const StealModal = require('../components/steal-modal').default
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    <StealModal timelineName={timelineName} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

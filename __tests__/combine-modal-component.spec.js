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
  const timelineStore = require('../stores/timeline').default
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
  timelineStore.clearAllModals()
})

test('Combine Modal component => renders correctly when open', () => {
  const timelineName = 'Timeline 1'
  const CombineModal = require('../components/combine-modal').default
  const timelineStore = require('../stores/timeline').default
  timelineStore.addModal(timelineName, {
    modalType: 'combine'
  })
  const tree = renderer.create(
    <CombineModal timelineName={timelineName} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Combine Modal component => renders correctly when closed', () => {
  const timelineName = 'Timeline 1'
  const CombineModal = require('../components/combine-modal').default
  const tree = renderer.create(
    <CombineModal timelineName={timelineName} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

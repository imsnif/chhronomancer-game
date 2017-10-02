import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('Spinner => renders correctly', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Spinner => renders correctly (first spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(50)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (second spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(100)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (third spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(150)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (fourth spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(250)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (fifth spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(300)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (sixth spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(350)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (seventh spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(400)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Spinner => renders correctly (eighth spin)', () => {
  jest.useFakeTimers()
  const Spinner = require('../components/spinner').default
  const tree = renderer.create(
    <Spinner />
  )
  jest.runTimersToTime(450)
  expect(tree.toJSON()).toMatchSnapshot()
})

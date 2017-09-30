import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('Power progress indicator => renders correctly', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (first spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(125)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (second spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(250)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (third spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(375)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (fourth spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(500)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (fifth spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(625)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (sixth spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(750)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (seventh spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(875)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Power progress indicator => renders correctly (eighth spin)', () => {
  jest.useFakeTimers()
  const Power = require('../components/power').default
  const tree = renderer.create(
    <Power name='foo' timeLeft='00:42:12' progress='50' />
  )
  jest.runTimersToTime(1000)
  expect(tree.toJSON()).toMatchSnapshot()
})

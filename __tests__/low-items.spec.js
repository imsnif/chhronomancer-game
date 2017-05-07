import 'react-native'
import React from 'react'
import LowItems from '../components/low-items'
import renderer from 'react-test-renderer'

test('LowItems (with no items) => renders correctly', () => {
  const items = [
    { name: 'assistPrevent', fill: false, bright: false },
    { name: 'steal', fill: false, bright: false },
    { name: 'reset', fill: false, bright: false }
  ]
  const tree = renderer.create(
    <LowItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with filled items) => renders correctly', () => {
  const items = [
    { name: 'assistPrevent', fill: true, bright: false },
    { name: 'steal', fill: true, bright: false },
    { name: 'reset', fill: true, bright: false }
  ]
  const tree = renderer.create(
    <LowItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with bright items) => renders correctly', () => {
  const items = [
    { name: 'assistPrevent', fill: true, bright: true },
    { name: 'steal', fill: true, bright: true },
    { name: 'reset', fill: true, bright: true }
  ]
  const tree = renderer.create(
    <LowItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LowItems (with fill bright mix) => renders correctly', () => {
  const items = [
    { name: 'assistPrevent', fill: true, bright: true },
    { name: 'steal', fill: false, bright: false },
    { name: 'reset', fill: true, bright: false }
  ]
  const tree = renderer.create(
    <LowItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

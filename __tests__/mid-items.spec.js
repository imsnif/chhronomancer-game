import 'react-native'
import React from 'react'
import MidItems from '../components/mid-items'
import renderer from 'react-test-renderer'

test('MidItems (not filled) => renders correctly', () => {
  const items = [
    { name: 'lock', fill: false, bright: false },
    { name: 'unlock', fill: false, bright: false }
  ]
  const tree = renderer.create(
    <MidItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MidItems (filled) => renders correctly', () => {
  const items = [
    { name: 'lock', fill: true, bright: false },
    { name: 'unlock', fill: true, bright: false }
  ]
  const tree = renderer.create(
    <MidItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MidItems (filled and bright) => renders correctly', () => {
  const items = [
    { name: 'lock', fill: true, bright: true },
    { name: 'unlock', fill: true, bright: true }
  ]
  const tree = renderer.create(
    <MidItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MidItems (filled and partially bright) => renders correctly', () => {
  const items = [
    { name: 'lock', fill: true, bright: true },
    { name: 'unlock', fill: true, bright: false }
  ]
  const tree = renderer.create(
    <MidItems items={items} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

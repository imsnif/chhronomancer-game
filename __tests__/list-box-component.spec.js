import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

test('ListBox (with title) => renders correctly', () => {
  const ListBox = require('../components/list-box').default
  const tree = renderer.create(
    <ListBox title='foo' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ListBox (with title and subtitle) => renders correctly', () => {
  const ListBox = require('../components/list-box').default
  const tree = renderer.create(
    <ListBox title='foo' subtitle='bar' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ListBox (with title and picture) => renders correctly', () => {
  const ListBox = require('../components/list-box').default
  const tree = renderer.create(
    <ListBox title='foo' image={{uri: 'http://foo.bar/baz'}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ListBox (with title, subtitle and picture) => renders correctly', () => {
  const ListBox = require('../components/list-box').default
  const tree = renderer.create(
    <ListBox title='foo' subtitle='bar' image={{uri: 'http://foo.bar/baz'}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

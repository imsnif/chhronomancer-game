import 'react-native';
import React from 'react';
import Item from '../components/item';
import renderer from 'react-test-renderer';

test('Item (default props) => renders correctly', () => {
  const tree = renderer.create(
    <Item />
  ).toJSON();
  expect(tree).toMatchSnapshot()
})

test('Item (with color) => renders correctly', () => {
  const tree = renderer.create(
    <Item color='red' />
  ).toJSON();
  expect(tree).toMatchSnapshot()
})

test('Item (with fill) => renders correctly', () => {
  const tree = renderer.create(
    <Item fill={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
})

test('Item (with color and fill) => renders correctly', () => {
  const tree = renderer.create(
    <Item color='red' fill={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
})

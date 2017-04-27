import 'react-native'
import React from 'react'
import ExternalParties from '../components/external-parties'
import renderer from 'react-test-renderer'
import image from '../assets/placeholders/green_me.png'

test('ExternalParties (default props) => renders correctly', () => {
  const tree = renderer.create(
    <ExternalParties />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ExternalParties (with name, total and image) => renders correctly', () => {
  const tree = renderer.create(
    <ExternalParties name='foo' total={1} image={image} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ExternalParties (with name, total, image and parties) => renders correctly', () => {
  const tree = renderer.create(
    <ExternalParties
      name='foo'
      total={1}
      image={image}
      parties={[
        {id: 1, name: 'foo', score: 7},
        {id: 2, name: 'foo', score: 7},
        {id: 3, name: 'foo', score: 7}
      ]}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

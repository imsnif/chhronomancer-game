import 'react-native'
import renderer from 'react-test-renderer'
import { navigatorMock } from '../test-utils'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  const clockStore = require('../stores/clock').default
  jest.useRealTimers()
  clockStore.destroy()
  jest.useFakeTimers()
})

test('Game renderScene (Timeline) => renders correctly', () => {
  const timelineName = 'Timeline 1'
  const renderScene = require('../components/game/render-scene').default
  const route = {
    screenName: 'Timeline',
    timelineName
  }
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    renderScene(route, navigatorMock(timelineName))
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Game renderScene (Bidding) => renders correctly', () => {
  const timelineName = 'Timeline 1'
  const renderScene = require('../components/game/render-scene').default
  const route = {
    screenName: 'Bidding',
    playerId: 1,
    timelineName
  }
  require('../server-mock') // TODO: export a function like a normal Human being
  const tree = renderer.create(
    renderScene(route, navigatorMock(timelineName))
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

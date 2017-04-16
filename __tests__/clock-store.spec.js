import moment from 'moment'
import renderer from 'react-test-renderer'
import MockDate from 'mockdate'

const staticTime = 1492347672000

beforeEach(() => {
  jest.resetModules()
  jest.useFakeTimers()
  MockDate.reset()
  MockDate.set(staticTime)
})

test('ClockStore => is constructed properly', () => {
  const clockStore = require('../stores/clock').default
  expect(clockStore.time.valueOf()).toEqual(staticTime)
  clockStore.destroy()
})

test('ClockStore => moves time forward', () => {
  const clockStore = require('../stores/clock').default
  MockDate.set(staticTime + 1000)
  jest.runTimersToTime(1000)
  expect(clockStore.time.valueOf()).toEqual(staticTime + 1000)
  clockStore.destroy()
})

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
  const epochStoreTime = clockStore.time.valueOf()
  expect(epochStoreTime).toEqual(staticTime)
  clockStore.destroy()
})

test('ClockStore => moves time forward', () => {
  const clockStore = require('../stores/clock').default
  MockDate.set(staticTime + 1000)
  jest.runTimersToTime(1000)
  const epochStoreTime = clockStore.time.valueOf()
  expect(epochStoreTime).toEqual(staticTime + 1000)
  clockStore.destroy()
})

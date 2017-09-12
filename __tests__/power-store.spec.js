beforeEach(() => {
  jest.resetModules()
  jest.useFakeTimers()
})

test('PowerStore => is constructed properly', () => {
  const powerStore = require('../stores/power').default
  const powers = powerStore.powers.map(p => p)
  expect(powers).toEqual([])
})

test('PowerStore => can add a power', () => {
  const powerStore = require('../stores/power').default
  powerStore.addPower({
    playerId: 1,
    timelineName: 'foo',
    name: 'bar',
    startTime: 1,
    endTime: 2,
    target: 'baz',
    allies: [{a: 1, b: 1}, {c: 3, d: 4}],
    enemies: [{x: 1, y: 1}, {z: 3, q: 4}]
  })
  const powers = powerStore.powers.map(p => p)
  expect(powers).toMatchSnapshot()
})

test('PowerStore => can get power', () => {
  const powerStore = require('../stores/power').default
  powerStore.addPower({
    name: 'foo',
    playerId: 1,
    timelineName: 'bar'
  })
  expect(powerStore.getPower(1, 'bar')).toMatchSnapshot()
})

test('PowerStore => can get progress', () => {
  // TODO: fake timers with sinon's lolex to test this properly
  const powerStore = require('../stores/power').default
  powerStore.addPower({
    name: 'foo',
    playerId: 1,
    timelineName: 'bar',
    startTime: Date.now(),
    endTime: Date.now() + 10000
  })
  expect(powerStore.getProgress(1, 'bar').get()).toEqual(1)
})

test('PowerStore => can get timeLeft', () => {
  const powerStore = require('../stores/power').default
  powerStore.addPower({
    name: 'foo',
    playerId: 1,
    timelineName: 'bar',
    startTime: 10000,
    endTime: 20000
  })
  expect(powerStore.getTimeLeft(1, 'bar')).toMatchSnapshot()
})

beforeEach(() => {
  jest.resetModules()
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
    playerId: 1,
    timelineName: 'foo'
  })
  expect(powerStore.getPower(1, 'foo')).toMatchSnapshot()
})

test('PowerStore => can get progress', () => {
  const powerStore = require('../stores/power').default
  powerStore.addPower({
    playerId: 1,
    timelineName: 'foo',
    startTime: 1000,
    endTime: 2000
  })
  expect(powerStore.getProgress(1, 'foo', 1500)).toEqual(50)
})

test('PowerStore => can get timeLeft', () => {
  const powerStore = require('../stores/power').default
  powerStore.addPower({
    playerId: 1,
    timelineName: 'foo',
    startTime: 10000,
    endTime: 20000
  })
  expect(powerStore.getTimeLeft(1, 'foo', 15000)).toMatchSnapshot()
})

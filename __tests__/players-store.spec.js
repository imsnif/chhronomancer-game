beforeEach(() => {
  jest.resetModules()
})

const fakePlayer = {
  id: 1,
  name: 'foo',
  items: {a: 1, b: 2},
  image: '123',
  activePower: {a: 1, b: 2, c: 3}
}

test('PlayersStore => is constructed properly', () => {
  const playersStore = require('../stores/players').default
  const players = playersStore.players.map(p => p)
  expect(players).toEqual([])
})

test('PlayersStore => can add a player', () => {
  const playersStore = require('../stores/players').default
  playersStore.addPlayer(fakePlayer)
  const players = playersStore.players.map(p => p)
  expect(players).toEqual([fakePlayer])
})

test('TimelineStore => can remove a player', () => {
  const playersStore = require('../stores/players').default
  playersStore.addPlayer(fakePlayer)
  playersStore.removePlayer(fakePlayer.id)
  const players = playersStore.players.map(p => p)
  expect(players).toEqual([])
})

test('TimelineStore => can update power', () => {
  const playersStore = require('../stores/players').default
  playersStore.addPlayer(fakePlayer)
  const activePower = {d: 1, f: 12}
  playersStore.updatePower(fakePlayer.id, activePower)
  const players = playersStore.players.map(p => p)
  expect(players).toEqual([Object.assign({}, fakePlayer, {activePower})])
})

beforeEach(() => {
  jest.resetModules()
})

const fakePlayer = {
  id: 1,
  name: 'foo',
  items: {a: 1, b: 2},
  image: '123'
}

test('PlayersStore => is constructed properly', () => {
  const playerStore = require('../stores/player').default
  const players = playerStore.players.map(p => p)
  expect(players).toEqual([])
})

test('PlayersStore => can add a player', () => {
  const playerStore = require('../stores/player').default
  playerStore.addPlayer(fakePlayer)
  const players = playerStore.players.map(p => p)
  expect(players).toEqual([fakePlayer])
})

test('TimelineStore => can remove a player', () => {
  const playerStore = require('../stores/player').default
  playerStore.addPlayer(fakePlayer)
  playerStore.removePlayer(fakePlayer.id)
  const players = playerStore.players.map(p => p)
  expect(players).toEqual([])
})

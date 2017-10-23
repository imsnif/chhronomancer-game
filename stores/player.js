import { observable, action } from 'mobx'

const { serverAddress } = require('../config.json')

class PlayerStore {
  @observable players = []
  @action addPlayer ({id, name, items, actions, picture}) {
    const player = this.getPlayer(id) || {}
    if (player.id) this.removePlayer(player.id)
    const pic = picture || `http://${serverAddress}/placeholders/nopic.png`
    this.players.push(Object.assign({}, player, {
      id,
      name,
      items,
      actions,
      picture: pic
    }))
  }
  @action removePlayer (id) {
    this.players = this.players.filter(p => {
      return p.id !== id
    })
  }
  getPlayer (id) {
    return this.players.find(p => p.id === id)
  }
  getPlayerByName (name) {
    return this.players.find(p => p.name === name)
  }
}

const playerStore = new PlayerStore()
export default playerStore

import {observable} from 'mobx'

class PlayersStore {
  @observable players = []
  addPlayer ({id, name, items, image}) {
    this.players.push({
      id,
      name,
      items,
      image
    })
  }
  removePlayer (id) {
    this.players = this.players.filter(p => {
      return p.id !== id
    })
  }
  getPlayer (id) {
    return this.players.find(p => p.id === id)
  }
}

const playersStore = new PlayersStore()
export default playersStore

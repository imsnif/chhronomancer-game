import {observable} from 'mobx'

class PlayersStore {
  @observable players = []
  addPlayer ({id, name, items, image, activePower}) {
    this.players.push({
      id,
      name,
      items,
      image,
      activePower
    })
  }
  removePlayer (id) {
    this.players = this.players.filter(p => {
      return p.id !== id
    })
  }
  updatePower (id, activePower) {
    const player = this.players.find(p => p.id === id)
    player.activePower = activePower
  }
}

const playersStore = new PlayersStore()
export default playersStore

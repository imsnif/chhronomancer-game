import { observable, action } from 'mobx'

class StatsStore {
  @observable playerId = null
  @observable actions = 0
  @action changePlayerId (id) {
    this.playerId = id
  }
  @action incrementActions (amount) {
    this.actions = this.actions + amount
  }
  @action decrementActions (amount) {
    this.actions = this.actions - amount
  }
}

const statsStore = new StatsStore()
export default statsStore

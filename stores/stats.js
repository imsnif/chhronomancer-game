import { observable, action } from 'mobx'

class StatsStore {
  @observable playerId = null
  @action changePlayerId (id) {
    this.playerId = id
  }
}

const statsStore = new StatsStore()
export default statsStore

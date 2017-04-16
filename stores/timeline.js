import {observable} from 'mobx'

class TimelineStore {
  @observable players = []
  addPlayer (id) {
    this.players.push(id)
  }
  removePlayer (id) {
    this.players = this.players.filter(p => p !== id)
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

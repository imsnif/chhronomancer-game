import {observable} from 'mobx'

class TimelineStore {
  @observable sortBy = 'player'
  @observable players = []
  addPlayer (id) {
    this.players.push(id)
  }
  removePlayer (id) {
    this.players = this.players.filter(p => p !== id)
  }
  changeSort (sort) {
    this.sortBy = sort
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

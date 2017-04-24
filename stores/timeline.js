import { observable } from 'mobx'

class TimelineStore {
  @observable timelines = []
  addTimeline (name, type) {
    this.timelines.push({
      name,
      type,
      sortBy: 'player',
      players: []
    })
  }
  addPlayer (timelineName, id) {
    let timeline = this.getTimeline(timelineName)
    timeline.players.push(id)
  }
  removePlayer (timelineName, id) {
    let timeline = this.getTimeline(timelineName)
    timeline.players = timeline.players.filter(p => p !== id)
  }
  changeSort (timelineName, sort) {
    let timeline = this.getTimeline(timelineName)
    timeline.sortBy = sort
  }
  getTimeline (name) {
    return this.timelines.find(t => t.name === name)
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

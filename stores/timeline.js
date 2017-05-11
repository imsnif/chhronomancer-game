import { observable, action } from 'mobx'

class TimelineStore {
  @observable timelines = []
  @action addTimeline (name, type) {
    this.timelines.push({
      name,
      type,
      sortBy: 'player',
      players: []
    })
  }
  @action addPlayer (timelineName, id) {
    let timeline = this.getTimeline(timelineName)
    timeline.players.push(id)
  }
  @action removePlayer (timelineName, id) {
    let timeline = this.getTimeline(timelineName)
    timeline.players = timeline.players.filter(p => p !== id)
  }
  @action changeSort (timelineName, sort) {
    let timeline = this.getTimeline(timelineName)
    timeline.sortBy = sort
  }
  getTimeline (name) {
    return this.timelines.find(t => t.name === name)
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

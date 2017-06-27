import { observable, action } from 'mobx'

class TimelineStore {
  @observable timelines = []
  @observable sortBy = 0
  @observable filterBy = 0
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
  @action changeTimelineSort (timelineName, sort) {
    let timeline = this.getTimeline(timelineName)
    timeline.sortBy = sort
  }
  @action changeSort (index) {
    this.sortBy = index
  }
  @action changeFilter (index) {
    this.filterBy = index
  }
  getTimeline (name) {
    return this.timelines.find(t => t.name === name)
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

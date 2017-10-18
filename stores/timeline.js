import { observable, action } from 'mobx'
import playerStore from './player'
import sendRequest from '../connect/send-request'

class TimelineStore {
  @observable timelines = []
  @observable sortBy = 0
  @observable filterBy = 0
  @observable modals = new Map()
  @action addTimeline (timelineStats) {
    const timeline = this.getTimeline(timelineStats.name) || {}
    if (timeline.name) this.removeTimeline(timeline.name)
    if (timelineStats.name) {
      this.timelines.push(Object.assign({}, timelineStats, {sortBy: timeline.sortBy || 'player'}))
    }
  }
  @action removeTimeline (name) {
    this.timelines = this.timelines.filter(p => {
      return p.name !== name
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
  @action changeTimelineLock (timelineName, isLocked) {
    let timeline = this.getTimeline(timelineName)
    timeline.isLocked = isLocked
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
  @action addModal (timelineName, modal) {
    this.modals.set(timelineName, modal)
  }
  @action clearAllModals () {
    this.modals.clear()
  }
  @action async joinTimeline (name) {
    await sendRequest(`/timeline/join/${name}`)
  }
  @action async lockTimeline (name) {
    await sendRequest(`/timeline/lock/${name}`)
  }
  @action async unlockTimeline (name) {
    await sendRequest(`/timeline/unlock/${name}`)
  }
  @action async resetTimeline (name) {
    await sendRequest(`/timeline/reset/${name}`)
  }
  @action async quest (name) {
    await sendRequest(`/timeline/quest/${name}`)
  }
  @action async stealItem (itemName, playerName, timelineName) {
    const player = playerStore.getPlayerByName(playerName)
    const targetPlayerId = player.id
    await sendRequest(`/timeline/steal/${itemName}/${targetPlayerId}/${timelineName}`)
  }
  @action async combineItems (item1, item2, timelineName) {
    await sendRequest(`/timeline/combine/${item1}/${item2}/${timelineName}`)
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

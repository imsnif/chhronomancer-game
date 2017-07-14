import { observable, action } from 'mobx'
import statsStore from './stats'
import playerStore from './player'

class TimelineStore {
  @observable timelines = []
  @observable sortBy = 0
  @observable filterBy = 0
  @observable modals = {}
  @action addTimeline (timelineStats) {
    const timeline = this.getTimeline(timelineStats.name) || {}
    if (timeline.name) this.removeTimeline(timeline.name)
    this.timelines.push(Object.assign({}, timelineStats, {sortBy: timeline.sortBy || 'player'}))
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
    this.modals[timelineName] = modal
  }
  @action clearAllModals () {
    this.modals = {}
  }
  @action async joinTimeline (name) {
    try {
      await fetch(`http://10.0.0.6:3000/timeline/join/${name}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  @action async lockTimeline (name) {
    try {
      await fetch(`http://10.0.0.6:3000/timeline/lock/${name}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  @action async unlockTimeline (name) {
    try {
      await fetch(`http://10.0.0.6:3000/timeline/unlock/${name}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  @action async resetTimeline (name) {
    try {
      await fetch(`http://10.0.0.6:3000/timeline/reset/${name}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  @action async quest (name) {
    try {
      await fetch(`http://10.0.0.6:3000/timeline/quest/${name}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  @action async stealItem (itemName, playerName, timelineName) {
    const player = playerStore.getPlayerByName(playerName)
    const targetPlayerId = player.id
    try {
      await fetch(`http://10.0.0.6:3000/timeline/steal/${itemName}/${targetPlayerId}/${timelineName}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
}

const timelineStore = new TimelineStore()
export default timelineStore

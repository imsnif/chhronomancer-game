import moment from 'moment'
import clockStore from './clock'
import statsStore from './stats'
import { observable, action, computed } from 'mobx'

class PowerStore {
  @observable powers = []
  @action addPower ({
    playerId,
    timelineName,
    name,
    startTime,
    endTime,
    target,
    allies,
    enemies
  }) {
    const power = this.getPower(playerId, timelineName) || {}
    if (power.playerId && power.timelineName) this.removePower(power.playerId, power.timelineName)
    if (!name) return // empty power, just delete it
    this.powers.push(Object.assign({}, power, {
      playerId,
      timelineName,
      name,
      startTime,
      endTime,
      target,
      allies,
      enemies
    }))
  }
  removePower (playerId, timelineName) {
    this.powers = this.powers.filter(p => {
      return (p.playerId !== playerId && p.timelineName !== timelineName)
    })
  }
  getPower (playerId, timelineName) {
    return this.powers.find(p => {
      return p.playerId === playerId &&
        p.timelineName === timelineName
    })
  }
  getPlayerPowers (playerId) {
    return this.powers.filter(p => p.playerId === playerId)
  }
  getProgress (playerId, timelineName) {
    return computed(() => {
      const power = this.getPower(playerId, timelineName)
      const whole = power.endTime - power.startTime
      const elapsed = clockStore.time - power.startTime
      const progress = Math.round((elapsed / whole) * 100)
      return progress < 100 ? progress : 100
    })
  }
  getTimeLeft (playerId, timelineName) {
    return computed(() => {
      const power = this.getPower(playerId, timelineName)
      if (!power) return
      const timeLeft = power.endTime - clockStore.time > 0
        ? power.endTime - clockStore.time
        : 0
      const duration = moment.duration(timeLeft)
      return moment.utc(duration.as('milliseconds')).format('HH:mm:ss')
    })
  }
  @action async assist (timelineName, targetPlayerId) {
    try {
      await fetch(`http://10.0.0.6:3000/bidding/assist/${timelineName}/${targetPlayerId}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  @action async prevent (timelineName, targetPlayerId) {
    try {
      await fetch(`http://10.0.0.6:3000/bidding/prevent/${timelineName}/${targetPlayerId}`, {
        method: 'POST',
        headers: {userId: statsStore.playerId}
      })
    } catch (e) {
      console.error(e)
    }
  }
}

const powerStore = new PowerStore()
export default powerStore

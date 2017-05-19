import moment from 'moment'
import clockStore from './clock'
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
    this.powers.push({
      playerId,
      timelineName,
      name,
      startTime,
      endTime,
      target,
      allies,
      enemies
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
}

const powerStore = new PowerStore()
export default powerStore

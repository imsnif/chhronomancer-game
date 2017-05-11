import moment from 'moment'
import { observable, action } from 'mobx'

// TODO: CONTINUE FROM HERE
// then move on to create character sheet screen
// then navigator bar
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
  getProgress (playerId, timelineName, time) {
    const power = this.getPower(playerId, timelineName)
    const whole = power.endTime - power.startTime
    const elapsed = time - power.startTime
    const progress = Math.round((elapsed / whole) * 100)
    return progress < 100 ? progress : 100
  }
  getTimeLeft (playerId, timelineName, time) {
    const power = this.getPower(playerId, timelineName)
    if (!power) return
    const timeLeft = power.endTime - time > 0
      ? power.endTime - time
      : 0
    const duration = moment.duration(timeLeft)
    return moment.utc(duration.as('milliseconds')).format('HH:mm:ss')
  }
}

const powerStore = new PowerStore()
export default powerStore

import { observable, action, computed } from 'mobx'
import moment from 'moment'

class Clock {
  @observable time = moment()
  constructor (period = 1000) {
    this.interval = setInterval(() => this.clockTick(), period)
  }
  @action clockTick (newTime = moment()) {
    this.time = newTime
  }
  getRelativeDuration (startTime) {
    return computed(() => {
      return moment(startTime).fromNow(this.time)
    })
  }
  destroy () {
    clearInterval(this.interval)
  }
}

const clock = new Clock()
export default clock

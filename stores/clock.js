import { observable, action, computed } from 'mobx'
import moment from 'moment'

const spinnerChars = [ '|', '/', '-', '\\', '|', '/', '-', '\\' ]

class Clock {
  intervals = []
  spinnerIndex = 0
  @observable time = moment()
  @observable spinnerChar = spinnerChars[0]
  constructor (period = 1000) {
    this.intervals.push(setInterval(() => this.clockTick(), period))
    this.intervals.push(setInterval(() => this.spinnerTick(), Math.floor(period / 8)))
  }
  @action clockTick (newTime = moment()) {
    this.time = newTime
  }
  @action spinnerTick () {
    this.spinnerIndex = this.spinnerIndex + 1 < spinnerChars.length
      ? this.spinnerIndex += 1
      : this.spinnerIndex = 0
    this.spinnerChar = spinnerChars[this.spinnerIndex]
  }
  getRelativeDuration (startTime) {
    return computed(() => {
      return moment(startTime).fromNow(this.time)
    })
  }
  destroy () {
    this.intervals.map(clearInterval)
  }
}

const clock = new Clock()
export default clock

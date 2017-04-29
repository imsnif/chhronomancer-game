import {observable} from 'mobx'

class PowerStore {
  @observable powers = []
  addPower ({
    playerId,
    timelineName,
    name,
    startTime,
    endTime,
    alliedPlayers,
    enemyPlayers
  }) {
    this.powers.push({
      playerId,
      timelineName,
      name,
      startTime,
      endTime,
      alliedPlayers,
      enemyPlayers
    })
  }
  getPower (playerId, timelineName) {
    return this.powers.find(p => {
      return p.playerId === playerId &&
        p.timelineName === timelineName
    })
  }
}

const powerStore = new PowerStore()
export default powerStore

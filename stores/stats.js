import { observable, action, computed } from 'mobx'
import playerStore from './player'
import connect from '../connect'

class StatsStore {
  @observable playerId = null
  @observable connected = false
  @observable winnerId = false
  @observable accessToken = false
  @computed get loggedIn () {
    return playerStore.players.map(p => p.id).includes(this.playerId)
  }
  @action changePlayerId (id) {
    this.playerId = id
  }
  @action connect () {
    this.connected = true
  }
  @action announceWinner (id) {
    this.winnerId = id
  }
  @action async login (data) {
    try {
      if (!data || !data.credentials || !data.credentials.userId) throw new Error('no userid!')
      this.accessToken = data.credentials.token
      await fetch(`http://10.0.0.6:3000/player/update`, {
        method: 'POST',
        headers: {
          access_token: this.accessToken
        }
      })
      connect(String(data.credentials.userId))
      this.reconnectInterval = setInterval(() => {
        if (this.loggedIn) return clearInterval(this.reconnectInterval)
        connect(data.credentials.userId)
      }, 5000) // TODO: interval from config
      this.playerId = String(data.credentials.userId)
    } catch (e) {
      console.error(e)
    }
  }
}

const statsStore = new StatsStore()
export default statsStore

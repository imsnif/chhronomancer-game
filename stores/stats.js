import { observable, action, computed } from 'mobx'
import playerStore from './player'
import connect from '../connect'

const { serverAddress } = require('../config.json')

class StatsStore {
  @observable playerId = null
  @observable connected = false
  @observable winnerId = false
  @observable accessToken = false
  @observable error = false
  @computed get loggedIn () {
    return playerStore.players.map(p => p.id).includes(this.playerId)
  }
  @action changePlayerId (id) {
    this.playerId = id
  }
  @action connect () {
    this.connected = true
  }
  @action disconnect () {
    this.connected = false
  }
  @action announceWinner (id) {
    this.winnerId = id
  }
  @action clearWinner () {
    this.winnerId = false
  }
  @action addError (error) {
    this.error = error
    setTimeout(() => this.clearError(), 5000) // TODO: debounce
  }
  @action clearError () {
    this.error = false
  }
  @action async login (data) {
    try {
      if (!data || !data.credentials || !data.credentials.userId) throw new Error('no userid!')
      this.accessToken = data.credentials.token
      await fetch(`http://${serverAddress}/player/update`, {
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

import { observable, action, computed } from 'mobx'
import playerStore from './player'

class StatsStore {
  @observable playerId = null
  @observable connected = false
  @computed get loggedIn() {
    return playerStore.players.map(p => p.id).includes(this.playerId)
  }
  @action changePlayerId (id) {
    this.playerId = id
  }
  @action connect () {
    this.connected = true
  }
  @action async login (data) {
    try {
      if (!data || !data.credentials || !data.credentials.userId) throw new Error('no userid!')
      if (
        data.profile &&
        data.profile.name &&
        data.profile.picture &&
        data.profile.picture.data &&
        data.profile.picture.data.url
      ) { // TODO: fix this
        await fetch(`http://10.0.0.6:3000/player/update`, {
          method: 'POST',
          headers: {
            userId: data.credentials.userId,
            userPic: data.profile.picture.data.url,
            name: data.profile.name
          }
        })
      }
      this.playerId = String(data.credentials.userId)
    } catch (e) {
      console.error(e)
    }
  }
}

const statsStore = new StatsStore()
export default statsStore

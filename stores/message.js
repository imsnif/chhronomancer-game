import { observable, action, computed } from 'mobx'
import debounce from 'debounce'
import sendRequest from '../connect/send-request'

class MessageStore {
  constructor () {
    this.markAllAsRead = debounce(this.markAllAsRead, 1000)
  }
  @observable messages = []
  @action addMessage (message) {
    const existingMessage = this.getMessage(message.id)
    if (message.name === false) {
      this.messages = this.messages.filter(m => {
        return m.id !== message.id
      })
    } else if (existingMessage) {
      existingMessage.read = message.read
    } else {
      this.messages.push(message)
    }
  }
  @action markAllAsRead () {
    if (this.messages.length > 0 && this.messages.some(m => !m.read)) {
      const lastTimestamp = this.messages[this.messages.length - 1].startTime
      sendRequest(`/player/read/${lastTimestamp}`)
    }
  }
  @computed get unreadMessages () {
    return this.messages.filter(m => !m.read).length
  }
  getMessage (messageId) {
    return this.messages.find(m => m.id === messageId)
  }
  removeMessage (id) {
    this.messages = this.messages.filter(m => {
      return m.id !== id
    })
  }
}

const messageStore = new MessageStore()
export default messageStore

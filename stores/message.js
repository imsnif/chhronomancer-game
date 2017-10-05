// import moment from 'moment'
// import clockStore from './clock'
import { observable } from 'mobx'

// TODO: CONTINUE FROM HERE - hard-coded message array so feed works, then test component then get messages from server
class MessageStore {
  @observable messages = [
    {
      id: 1,
      playerId: 1,
      text: 'is locking the timeline',
      timelineName: 'Timeline 0-1',
      startTime: '111'
    },
    {
      id: 2,
      playerId: 1,
      text: 'is locking the timeline',
      timelineName: 'Timeline 0-1',
      startTime: '111'
    },
    {
      id: 3,
      playerId: 1,
      text: 'is locking the timeline',
      timelineName: 'Timeline 0-1',
      startTime: '111'
    }
  ]
}

const messageStore = new MessageStore()
export default messageStore

import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { observer } from 'mobx-react/native'

import Navigate from './navigate'
import connect from '../connect'

import statsStore from '../stores/stats'

const { FBLogin, FBLoginManager } = require('react-native-facebook-login')

class FBLoginView extends Component { // TODO: move elsewhere
  render () {
    return (
      <View style={{height: '100%', width: '100%', backgroundColor: 'black'}} />
    )
  }
}

@observer
export default class chronomancer extends Component {
  render () {
    const loggedIn = statsStore.loggedIn
    if (loggedIn) {
      return (
        <Navigate renderScene={this.renderScene} />
      )
    } else if (statsStore.connected) {
      // TODO: move below component elsewhere
      return (
        <View style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
          <Text style={{color: 'green', fontFamily: 'telegrama_raw'}}>Connected! Waiting for game... (playerId: {statsStore.playerId})</Text>
        </View>
      )
    } else {
      return (
        <FBLogin style={{ marginBottom: 10 }}
          buttonView={<FBLoginView />}
          permissions={['email', 'user_friends']}
          loginBehavior={FBLoginManager.LoginBehaviors.Web}
          onLogin={function (data) {
            statsStore.login(data)
            connect(data.credentials.userId) // TODO: move to statsStore
            let reconnect = setInterval(() => { // TODO: fix this
              if (statsStore.loggedIn) return clearInterval(reconnect)
              connect(data.credentials.userId)
            }, 5000) // TODO: reconnect timeout from config
          }}
          onLoginFound={function (data) {
            statsStore.login(data)
            connect(String(data.credentials.userId)) // TODO: move to statsStore
            let reconnect = setInterval(() => { // TODO: fix this
              if (statsStore.loggedIn) return clearInterval(reconnect)
              connect(data.credentials.userId)
            }, 5000)
          }}
        />
      )
    }
  }
}

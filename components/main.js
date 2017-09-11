import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { observer } from 'mobx-react/native'

import Navigate from './navigate'
import Login from './login'

import statsStore from '../stores/stats'

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
        <Login />
      )
    }
  }
}

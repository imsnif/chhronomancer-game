import React, { Component } from 'react'

import { observer } from 'mobx-react/native'

import Navigate from './navigate'
import Login from './login'
import WaitingForGame from './waiting-for-game'

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
      return (
        <WaitingForGame />
      )
    } else {
      return (
        <Login />
      )
    }
  }
}

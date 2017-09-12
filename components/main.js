import React, { Component } from 'react'

import { observer } from 'mobx-react/native'

import Game from './game'
import Login from './login'
import WaitingForGame from './waiting-for-game'

import statsStore from '../stores/stats'

@observer
export default class chronomancer extends Component {
  render () {
    if (statsStore.loggedIn) return <Game />
    if (statsStore.connected) return <WaitingForGame />
    return <Login />
  }
}

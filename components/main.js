import React, { Component } from 'react'
import {
  Navigator,
  View,
  Text
} from 'react-native'

import { observer } from 'mobx-react/native'

import Timeline from './timeline'
import TimelineGrid from './timeline-grid'
import Bidding from './bidding'
import NavBar from './navbar'
import CharacterSheet from './character-sheet'
import connect from '../connect'

import statsStore from '../stores/stats'

const { FBLogin, FBLoginManager } = require('react-native-facebook-login')

const InstantTransition = { // TODO: move this somewhere else
  gestures: null,
  defaultTransitionVelocity: null,
  springFriction: null,
  springTension: 1000,
  animationInterpolators: {
    into: r => {
      r.opacity = 1
      return true
    },
    out: r => {
      r.opacity = 1
      return true
    }
  }
}

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
        <Navigator
          style={{ flex: 1 }}
          initialRoute={{ screenName: 'character-sheet' }}
          renderScene={this.renderScene}
          configureScene={() => InstantTransition}
        />
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
  renderScene (route, navigator) {
    if (route.screenName === 'timeline-grid') {
      return (
        <NavBar navigator={navigator}>
          <TimelineGrid
            navigator={navigator}
          />
        </NavBar>
      )
    } else if (route.screenName === 'Timeline') {
      return (
        <NavBar navigator={navigator}>
          <Timeline
            navigator={navigator}
            name={route.timelineName}
          />
        </NavBar>
      )
    } else if (route.screenName === 'Bidding') {
      return (
        <NavBar navigator={navigator}>
          <Bidding
            playerId={route.playerId}
            timelineName={route.timelineName}
            navigator={navigator}
          />
        </NavBar>
      )
    } else if (route.screenName === 'character-sheet') {
      return (
        <NavBar navigator={navigator}>
          <CharacterSheet playerId={statsStore.playerId} navigator={navigator} />
        </NavBar>
      )
    }
  }
}

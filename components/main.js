import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'

import Timeline from './timeline'
import TimelineGrid from './timeline-grid'
import Bidding from './bidding'
import NavBar from './navbar'
import CharacterSheet from './character-sheet'

const InstantTransition = { // TODO: move this somewhere else
  gestures: null,
  defaultTransitionVelocity: null,
  springFriction: null,
  springTension: 1000,
  animationInterpolators: {
    into: r => r.opacity = 1,
    out: r => r.opacity = 1,
  },
}

export default class chronomancer extends Component {
  render () {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ screenName: 'character-sheet' }}
        renderScene={this.renderScene}
        configureScene={() => InstantTransition}
      />
    )
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
          />
        </NavBar>
      )
    } else if (route.screenName === 'character-sheet') {
      return (
        <NavBar navigator={navigator}>
          <CharacterSheet playerId={1}/>
        </NavBar>
      )
    }
  }
}

import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'

import Timeline from './timeline'
import TimelineGrid from './timeline-grid'
import Bidding from './bidding'

import CharacterSheet from './character-sheet'

export default class chronomancer extends Component {
  render () {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ screenName: 'timeline-grid' }}
        renderScene={this.renderScene}
      />
    )
  }
  renderScene (route, navigator) {
    if (route.screenName === 'timeline-grid') {
//      return (
//        <CharacterSheet playerId={1}/>
//      )
      return (
        <TimelineGrid
          navigator={navigator}
        />
      )
    } else if (route.screenName === 'Timeline') {
      return (
        <Timeline
          navigator={navigator}
          name={route.timelineName}
        />
      )
    } else if (route.screenName === 'Bidding') {
      return (
        <Bidding
          playerId={route.playerId}
          timelineName={route.timelineName}
        />
      )
    }
  }
}

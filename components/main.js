import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'

import Timeline from './timeline'
import TimelineGrid from './timeline-grid'
import Bidding from './bidding'

import playersStore from '../stores/players'
import timelineStore from '../stores/timeline'
import clockStore from '../stores/clock'

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
      return (
        <TimelineGrid
          timelineStore={timelineStore}
          playersStore={playersStore}
          navigator={navigator}
        />
      )
    } else if (route.screenName === 'Timeline') {
      return (
        <Timeline
          navigator={navigator}
          name={route.timelineName}
          playersStore={playersStore}
          timelineStore={timelineStore}
          clockStore={clockStore}
        />
      )
    } else if (route.screenName === 'Bidding') {
      return (
        <Bidding />
      )
    }
  }
}

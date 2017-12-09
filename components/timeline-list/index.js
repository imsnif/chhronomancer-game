import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { observer } from 'mobx-react/native'
import TimelineSummary from '../timeline-summary'

import timelineStore from '../../stores/timeline'
import statsStore from '../../stores/stats'

function sortTimelines (a, b) {
  if (timelineStore.sortBy === 0) { // name
    return (a.name < b.name ? -1 : 1)
  } if (timelineStore.sortBy === 1) { // type
    return (a.type < b.type ? -1 : 1)
  }
}

function filterTimelines (timeline) {
  return timelineStore.filterBy === 1 // filter by player in timeline
    ? timeline.players.some(p => p === statsStore.playerId)
    : true
}

@observer
export default class TimelineList extends Component {
  render () {
    return (
      <ScrollView>
        {
          timelineStore.timelines
          .sort(sortTimelines)
          .filter(filterTimelines)
          .map(timeline => {
            return <TimelineSummary
              key={timeline.name}
              name={timeline.name}
              navigator={this.props.navigator}
            />
          })
        }
      </ScrollView>
    )
  }
}

import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView, View } from 'react-native'
import TimelineSummary from '../timeline-summary'
import Switch from '../switch'
import ControlPanel from '../control-panel'
import styles from './styles'

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
export default class TimelineGrid extends Component {
  _changeSortToName () {
    timelineStore.changeSort(0)
  }
  _changeSortToType () {
    timelineStore.changeSort(1)
  }
  _filterAllTimelines () {
    timelineStore.changeFilter(0)
  }
  _filterMyTimelines () {
    timelineStore.changeFilter(1)
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
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
        </View>
        <ControlPanel>
          <Switch selected={timelineStore.filterBy} options={[
            {text: 'all timelines', action: this._filterAllTimelines},
            {text: 'my timelines', action: this._filterMyTimelines}
          ]} />
          <Switch selected={timelineStore.sortBy} options={[
            {text: 'name', action: this._changeSortToName},
            {text: 'type', action: this._changeSortToType}
          ]} />
        </ControlPanel>
      </View>
    )
  }
}

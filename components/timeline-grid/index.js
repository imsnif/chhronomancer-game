import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View } from 'react-native'
import Switch from '../switch'
import ControlPanel from '../control-panel'
import TimelineList from '../timeline-list'
import styles from './styles'

import timelineStore from '../../stores/timeline'

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
          <TimelineList navigator={this.props.navigator} />
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

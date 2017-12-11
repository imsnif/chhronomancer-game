import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react/native'
import ControlPanel from '../control-panel'
import PlayersInTimeline from '../players-in-timeline'
import TimelineControls from '../timeline-controls'
import Switch from '../switch'
import Item from '../item'
import StealModal from '../steal-modal'
import CombineModal from '../combine-modal'
import styles from './styles'

import timelineStore from '../../stores/timeline'

@observer
export default class Timeline extends Component {
  constructor (props) {
    super(props)
    this._changeSortToPlayer = this._changeSortToPlayer.bind(this)
    this._changeSortToType = this._changeSortToType.bind(this)
    this._changeSortToTime = this._changeSortToTime.bind(this)
  }
  _changeSortToPlayer () {
    timelineStore.changeTimelineSort(this.props.name, 'player')
  }
  _changeSortToType () {
    timelineStore.changeTimelineSort(this.props.name, 'type')
  }
  _changeSortToTime () {
    timelineStore.changeTimelineSort(this.props.name, 'time')
  }
  render () {
    const { name } = this.props
    const timeline = timelineStore.getTimeline(name)
    const { sortBy } = timeline
    const sortIndex = sortBy === 'player' ? 0 : sortBy === 'type' ? 1 : 2
    return (
      <View style={styles.container}>
        <StealModal timelineName={name} />
        <CombineModal timelineName={name} />
        <View style={styles.titleItem}>
          <Item name={timeline.type} fill style={styles.timelineItemType} />
          <Text style={styles.titleText}>{timeline.name}{timeline.isLocked ? ' (LOCKED)' : null}</Text>
        </View>
        <PlayersInTimeline name={name} navigator={this.props.navigator} />
        <ControlPanel>
          <TimelineControls name={name} />
          <Switch selected={sortIndex} options={[
            {text: 'player', action: this._changeSortToPlayer},
            {text: 'type', action: this._changeSortToType},
            {text: 'time', action: this._changeSortToTime}
          ]} />
        </ControlPanel>
      </View>
    )
  }
}

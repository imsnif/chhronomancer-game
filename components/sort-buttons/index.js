import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

import timelineStore from '../../stores/timeline'

@observer
export default class SortButtons extends Component {
  constructor (props) {
    super(props)
    this._changeSortToPlayer = this._changeSortToPlayer.bind(this)
    this._changeSortToType = this._changeSortToType.bind(this)
    this._changeSortToTime = this._changeSortToTime.bind(this)
  }
  _changeSortToPlayer () {
    timelineStore.changeTimelineSort(this.props.timelineName, 'player')
  }
  _changeSortToType () {
    timelineStore.changeTimelineSort(this.props.timelineName, 'type')
  }
  _changeSortToTime () {
    timelineStore.changeTimelineSort(this.props.timelineName, 'time')
  }
  render () {
    const { sortBy } = timelineStore.getTimeline(this.props.timelineName)
    return (
      <View style={styles.container}>
        <TouchableHighlight style={sortBy === 'player'
          ? styles.selected
          : styles.unSelectedMiddle
        } onPress={this._changeSortToPlayer}>
          <Text style={sortBy === 'player'
            ? styles.selectedText
            : styles.unSelectedText
          }>Player</Text>
        </TouchableHighlight>
        <TouchableHighlight style={sortBy === 'type'
          ? styles.selected
          : styles.unSelectedMiddle
        } onPress={this._changeSortToType}>
          <Text style={sortBy === 'type'
            ? styles.selectedText
            : styles.unSelectedText
          }>Type</Text>
        </TouchableHighlight>
        <TouchableHighlight style={sortBy === 'time'
          ? styles.selected
          : styles.unSelected
        } onPress={this._changeSortToTime}>
          <Text style={sortBy === 'time'
            ? styles.selectedText
            : styles.unSelectedText
          }>Time</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

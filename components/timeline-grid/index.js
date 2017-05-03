import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView, View } from 'react-native'
import TimelineSummary from '../timeline-summary'
import styles from './styles'

import timelineStore from '../../stores/timeline'

@observer
export default class TimelineGrid extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.timelineScroll}>
          {
          timelineStore.timelines.map(timeline => {
            return <TimelineSummary
              key={timeline.name}
              name={timeline.name}
              type={timeline.type}
              playersStore={this.props.playersStore}
              navigator={this.props.navigator}
            />
          })
        }
        </ScrollView>
      </View>
    )
  }
}

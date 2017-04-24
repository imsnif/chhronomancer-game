import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView, View, Button } from 'react-native'
import TimelineSummary from '../timeline-summary'
import styles from './styles'

@observer
export default class TimelineGrid extends Component {
  render() {
    const timelineStore = this.props.timelineStore
    return (
      <View style={styles.container}>
        <ScrollView style={styles.timelineScroll}>
        {
          timelineStore.timelines.map(timeline => {
            return <TimelineSummary
              key={timeline.name}
              name={timeline.name}
              type={timeline.type}
              timelineStore={timelineStore}
              playersStore={this.props.playersStore}
            />
          })
        }
        </ScrollView>
      </View>
    )
  }
}

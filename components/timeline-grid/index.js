import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView, View } from 'react-native'
import TimelineSummary from '../timeline-summary'
import SortButtons from '../sort-buttons'
import MenuButton from '../menu-button'
import Switch from '../switch'
import styles from './styles'

import timelineStore from '../../stores/timeline'

@observer
export default class TimelineGrid extends Component {
  // TODO: CONTINUE FROM HERE - make sort buttons look normal, then continue with timelines-todos in ~/todos - now make size of button area same as in timeline, then add timeline specific sorting (my timelines, etc.) - might want to create a separate "button pad" component, where you pass it buttons and it arranges them in a certain way?
  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <ScrollView style={styles.timelineScroll}>
            {
            timelineStore.timelines.map(timeline => {
              return <TimelineSummary
                key={timeline.name}
                name={timeline.name}
                type={timeline.type}
                navigator={this.props.navigator}
              />
            })
          }
          </ScrollView>
        </View>
        <View style={styles.separatingLine} />
        <View style={{flex: 1, marginTop: 5}}>
          <Switch selected={timelineStore.sortBy} options={[
            {text: 'name', action: () => timelineStore.changeSort(0)},
            {text: 'type', action: () => timelineStore.changeSort(1)}
          ]} />
        </View>
      </View>
    )
  }
}

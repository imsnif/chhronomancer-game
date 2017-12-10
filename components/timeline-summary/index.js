import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, TouchableHighlight } from 'react-native'
import ListBox from '../list-box'
import TimelinePlayerImages from '../timeline-player-images'
import styles from './styles'

import steal from '../../assets/items/steal-green.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import reset from '../../assets/items/reset-green.png'

import timelineStore from '../../stores/timeline'

@observer
export default class TimelineSummary extends Component {
  constructor (props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  navigate () {
    this.props.navigator.push({
      screenName: 'Timeline',
      timelineName: this.props.name
    })
  }
  render () {
    const images = {steal, assist, prevent, reset}
    const timeline = timelineStore.getTimeline(this.props.name)
    const imageToRender = images[timeline.type]
    return (
      <TouchableHighlight onPress={this.navigate}>
        <View style={{width: '100%', flexDirection: 'column'}}>
          <ListBox title={this.props.name}
            image={imageToRender}
            style={styles.listBox}
          >
            <TimelinePlayerImages name={this.props.name} />
          </ListBox>
          {
            timeline.isLocked
              ? <View style={styles.lockedOverlay}>
                <Text style={styles.lockedText}>LOCKED</Text>
              </View>
              : null
          }
        </View>
      </TouchableHighlight>
    )
  }
}

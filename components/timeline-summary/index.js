import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Image, TouchableHighlight } from 'react-native'
import ListBox from '../list-box'
import styles from './styles'

import steal from '../../assets/items/steal-green.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import reset from '../../assets/items/reset-green.png'
import lockedImage from '../../assets/generic/locked.png'

import timelineStore from '../../stores/timeline'
import playerStore from '../../stores/player'

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
        <ListBox title={this.props.name}
          image={imageToRender}
          rightImage={timeline.isLocked ? lockedImage : false}
          style={styles.listBox}
        >
          <View style={styles.wrapper}>
            {
            timeline.players
              ? timeline.players.map(pId => {
                const player = playerStore.players.find(p => p.id === pId)
                return (
                  <Image key={player.id} style={styles.image} source={{uri: player.picture}}>
                    <View style={styles.imageOverlay} />
                  </Image>
                )
              })
              : null
          }
          </View>
        </ListBox>
      </TouchableHighlight>
    )
  }
}

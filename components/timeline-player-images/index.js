import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Image } from 'react-native'
import styles from './styles'

import timelineStore from '../../stores/timeline'
import playerStore from '../../stores/player'

@observer
export default class TimelinePlayerImages extends Component {
  render () {
    const timeline = timelineStore.getTimeline(this.props.name)
    return (
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
    )
  }
}

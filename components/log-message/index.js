import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Image, Text } from 'react-native'
import styles from './styles'

import playerStore from '../../stores/player'
import clockStore from '../../stores/clock'

@observer
export default class LogMessage extends Component {
  render () {
    const { message } = this.props
    const player = playerStore.getPlayer(message.playerId)
    return (
      <View style={styles.messageContainer}>
        <View key={message.id} style={styles.messageTitleLine}>
          <Image source={{uri: player.picture}} style={styles.participantImage}>
            <View style={styles.imageOverlay} />
          </Image>
          <View style={styles.section}>
            <Text numberOfLines={1} style={styles.nameText}>{player.name}</Text>
          </View>
          <View style={styles.section}>
            <Text numberOfLines={1} style={styles.timelineText}>{message.timelineName}</Text>
          </View>
        </View>
        <Text numberOfLines={1} style={styles.actionText}>{message.text}</Text>
        <Text numberOfLines={1} style={styles.timeLeftText}>{clockStore.getRelativeDuration(message.startTime).get()} ago</Text>
      </View>
    )
  }
}

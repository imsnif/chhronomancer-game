import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import playerStore from '../../stores/player'

@observer
export default class PlayerWithScore extends Component {
  render () {
    const { id, score } = this.props
    const player = playerStore.getPlayer(id)
    return (
      <View key={id} style={styles.participantIndication}>
        <Image source={{uri: player.picture}} style={styles.participantImage}>
          <View style={styles.imageOverlay} />
        </Image>
        <View style={styles.nameTextBox}>
          <Text numberOfLines={1} style={styles.nameText}>{player.name}</Text>
        </View>
        <View style={styles.scoreTextBox}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
      </View>
    )
  }
}

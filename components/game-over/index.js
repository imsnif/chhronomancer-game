import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'

import HorizontalSeparator from '../horizontal-separator'
import styles from './styles'

import playerStore from '../../stores/player'
import statsStore from '../../stores/stats'

@observer
export default class GameOver extends Component {
  componentDidUpdate () {
    if (!statsStore.winnerId) {
      this.props.navigator.push({ screenName: 'character-sheet' })
    }
  }
  render () {
    if (!statsStore.winnerId) return null
    const winnerId = statsStore.winnerId
    const winner = playerStore.getPlayer(winnerId)
    return (
      <View style={styles.container}>
        <HorizontalSeparator style={{height: '8%'}} />
        <View style={styles.midSection}>
          <Text style={styles.text}>GAME OVER</Text>
          <Text style={styles.text}>Winner: {winner.name}</Text>
          <Image style={styles.playerImageBox} source={{uri: winner.picture}}>
            <View style={styles.imageOverlay} />
          </Image>
        </View>
        <HorizontalSeparator style={{height: '8%'}} />
      </View>
    )
  }
}

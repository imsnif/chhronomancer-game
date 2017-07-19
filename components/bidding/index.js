import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, StyleSheet } from 'react-native'
import ExternalParties from '../external-parties'
import styles from './styles'

import clockStore from '../../stores/clock'
import powerStore from '../../stores/power'
import playerStore from '../../stores/player'
import timelineStore from '../../stores/timeline'

import steal from '../../assets/items/steal-green.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import reset from '../../assets/items/reset-green.png'

const images = {steal, assist, prevent, reset}

@observer
export default class Bidding extends Component {
  render () {
    const time = clockStore.time
    const playerId = this.props.playerId
    const player = playerStore.getPlayer(playerId)
    const timelineName = this.props.timelineName
    const timeline = timelineStore.getTimeline(timelineName)
    const power = powerStore.getPower(playerId, timelineName)
    const powerName = power.name
    const timeLeft = powerStore.getTimeLeft(playerId, timelineName, time).get()
    const percentage = powerStore.getProgress(playerId, timelineName, time).get()
    const source = player.name
    const sourceImage = {uri: player.picture}
    const destination = power.target
    const destinationPlayer = playerStore.getPlayer(destination.id)
    const destinationImage = destination.type === 'player'
      ? {uri: destinationPlayer.picture}
      : images[timeline.type]
    const allies = power.allies
    const enemies = power.enemies
    const totalFor = allies.map(a => a.score).reduce((a, b) => a + b, 0)
    const totalAgainst = enemies.map(a => a.score).reduce((a, b) => a + b, 0)
    const balance = totalFor - totalAgainst
    return (
      <View style={styles.container}>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>{powerName}</Text>
        </View>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>{timelineName}</Text>
        </View>
        <View style={styles.titleItem}>
          <Text style={StyleSheet.flatten([styles.titleTextSmall, {flex: 2}])}>{timeLeft}</Text>
          <Text style={StyleSheet.flatten([styles.titleTextSmall, {flex: 1}])}>{balance}</Text>
          <Text style={StyleSheet.flatten([styles.titleTextSmall, {flex: 2}])}>{percentage}%</Text>
        </View>
        <View style={styles.summaryBox}>
          <View style={styles.boxWithGap}>
            <ExternalParties name={source} total={totalFor} image={sourceImage} parties={allies} onPress={() => powerStore.assist(timelineName, playerId)}/>
          </View>
          <View style={{flex: 1}}>
            <ExternalParties name={destinationPlayer.name} total={totalAgainst} image={destinationImage} parties={enemies} onPress={() => powerStore.prevent(timelineName, playerId)}/>
          </View>
        </View>
      </View>
    )
  }
}

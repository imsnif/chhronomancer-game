import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text } from 'react-native'
import ExternalParties from '../external-parties'
import styles from './styles'

import clockStore from '../../stores/clock'
import powerStore from '../../stores/power'
import playerStore from '../../stores/player'
import timelineStore from '../../stores/timeline'

import steal from '../../assets/items/steal-green.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/assist-green.png'
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
    const sourceImage = player.image
    const destination = power.target
    const destinationImage = destination.type === 'player'
      ? playerStore.getPlayer(destination.id).image
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
          <Text style={styles.titleTextStats}>{timeLeft}</Text>
          <Text style={styles.titleTextStatsCenter}>{balance}</Text>
          <Text style={styles.titleTextStats}>{percentage}%</Text>
        </View>
        <View style={styles.summaryBox}>
          <View style={styles.boxWithGap}>
            <ExternalParties name={source} total={totalFor} image={sourceImage} parties={allies} />
          </View>
          <View style={{flex: 1}}>
            <ExternalParties name={destination.name} total={totalAgainst} image={destinationImage} parties={enemies} />
          </View>
        </View>
      </View>
    )
  }
}

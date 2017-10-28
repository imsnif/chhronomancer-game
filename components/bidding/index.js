import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, StyleSheet } from 'react-native'
import ExternalParties from '../external-parties'
import styles from './styles'

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
  async componentDidUpdate () {
    const playerId = this.props.playerId
    const timelineName = this.props.timelineName
    const power = powerStore.getPower(playerId, timelineName)
    if (!power) { // TODO: move this elsewhere
      const scenes = this.props.navigator.getCurrentRoutes()
      const powerIndices = scenes.reduce((memo, scene, index) => {
        // find this bidding screen in the navigation stack
        if (
          scene.screenName === 'Bidding' &&
          scene.timelineName === timelineName &&
          Number(scene.playerId) === Number(playerId)
        ) {
          memo.push(index)
        }
        return memo
      }, [])
      const timelineScene = {screenName: 'Timeline', timelineName}
      for (const index of powerIndices) {
        // remove instances of this bidding screen from the navigation stack
        // replacing them with the timeline from which this power originated
        await new Promise(resolve => {
          this.props.navigator.replaceAtIndex(
            Object.assign({}, timelineScene, {_navigatorRouteId: index}),
            index,
            resolve
          )
        })
      }
    }
  }
  render () {
    const { playerId, timelineName } = this.props
    const player = playerStore.getPlayer(playerId)
    const timeline = timelineStore.getTimeline(timelineName)
    const power = powerStore.getPower(playerId, timelineName)
    if (!power) {
      return null
    }
    const timeLeft = powerStore.getTimeLeft(playerId, timelineName).get()
    const percentage = powerStore.getProgress(playerId, timelineName).get()
    const source = player.name
    const sourceImage = {uri: player.picture}
    const destination = power.target
    const destinationPlayer = playerStore.getPlayer(destination.id)
    const destinationImage = destination.type === 'player'
      ? {uri: destinationPlayer.picture}
      : images[timeline.type]
    const { allies, enemies } = power
    const totalFor = allies.map(a => a.score).reduce((a, b) => a + b, 0)
    const totalAgainst = enemies.map(a => a.score).reduce((a, b) => a + b, 0)
    const balance = totalFor - totalAgainst
    return (
      <View style={styles.container}>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>{power.name}</Text>
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
            <ExternalParties
              name={source}
              total={totalFor}
              image={sourceImage}
              parties={allies}
              onPress={() => powerStore.assist(timelineName, playerId)}
            />
          </View>
          <View style={{flex: 1}}>
            <ExternalParties
              name={destination.name || destinationPlayer.name}
              total={totalAgainst}
              image={destinationImage}
              parties={enemies}
              onPress={() => powerStore.prevent(timelineName, playerId)}
            />
          </View>
        </View>
      </View>
    )
  }
}

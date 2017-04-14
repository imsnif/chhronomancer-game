import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProgressBar from '../progress-bar'
import styles from './styles'

export default class Power extends Component {
  render () {
    return (
      <ProgressBar progress={this.props.progress}>
        <Text style={styles.powerName}>{this.props.name}...</Text>
        <Text style={styles.timeLeft}>{this.props.timeLeft}</Text>
        <View style={styles.involvedPlayers}>
          <Text style={styles.alliedPlayers}>{this.props.alliedPlayers}</Text>
          <Text style={styles.divider}>/</Text>
          <Text style={styles.enemyPlayers}>{this.props.enemyPlayers}</Text>
        </View>
      </ProgressBar>
    )
  }
}

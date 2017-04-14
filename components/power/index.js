import React from 'react'
import { View, Text } from 'react-native'
import ProgressBar from '../progress-bar'
import styles from './styles'

export default function Power (props) {
  return (
    <ProgressBar progress={props.progress}>
      <Text style={styles.powerName}>{props.name}...</Text>
      <Text style={styles.timeLeft}>{props.timeLeft}</Text>
      <View style={styles.involvedPlayers}>
        <Text style={styles.alliedPlayers}>{props.alliedPlayers}</Text>
        <Text style={styles.divider}>/</Text>
        <Text style={styles.enemyPlayers}>{props.enemyPlayers}</Text>
      </View>
    </ProgressBar>
  )
}

import React from 'react'
import {
  View,
  Text
} from 'react-native'

import statsStore from '../../stores/stats'
import styles from './styles'

export default function WaitingForGame () {
  return (
    <View style={styles.fullBackground}>
      <Text style={styles.text}>
        Connected! Waiting for game... (playerId: {statsStore.playerId})
      </Text>
    </View>
  )
}

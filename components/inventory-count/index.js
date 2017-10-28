import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function InventoryCount (props) {
  return (
    <View style={styles.countContainer}>
      <Text style={styles.text}>Cap: </Text>
      <Text style={styles.text}>{props.count}/8</Text>
    </View>
  )
}

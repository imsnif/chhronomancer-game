import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function InventoryCount (props) {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.text}>Artifacts: </Text>
      <Text style={styles.text}>{props.count}/7</Text>
    </View>
  )
}

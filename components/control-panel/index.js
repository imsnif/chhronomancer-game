import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function ControlPanel (props) {
  const leftPanel = props.children[0]
  const rightPanel = props.children[1]
  return (
    <View style={styles.container}>
      <Text style={styles.separatingLine}>+-------------------------------------+------------------+</Text>
      <View style={styles.contentContainer}>
        <View style={styles.leftPanelContainer}>
          {leftPanel}
        </View>
        <Text style={styles.verticalLine}>{' |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n'}</Text>
        <View style={styles.rightPanelContainer}>
          {rightPanel}
        </View>
      </View>
    </View>
  )
}

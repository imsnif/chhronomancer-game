import React from 'react'
import { View } from 'react-native'

import HorizontalSeparator from '../horizontal-separator'
import styles from './styles'

export default function ControlPanel (props) {
  const leftPanel = props.children[0]
  const rightPanel = props.children[1]
  return (
    <View style={styles.container}>
      <HorizontalSeparator style={{height: '20%'}} />
      <View style={styles.contentContainer}>
        <View style={styles.leftPanelContainer}>
          {leftPanel}
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.rightPanelContainer}>
          {rightPanel}
        </View>
      </View>
    </View>
  )
}

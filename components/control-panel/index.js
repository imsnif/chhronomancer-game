import React from 'react'
import { View } from 'react-native'

import VerticalSeparator from '../vertical-separator'
import HorizontalSeparator from '../horizontal-separator'
import styles from './styles'

export default function ControlPanel (props) {
  const leftPanel = props.children[0]
  const rightPanel = props.children[1]
  return (
    <View style={styles.container}>
      <HorizontalSeparator length={54} plusAt={[36]} style={styles.horizontalLine} />
      <View style={styles.contentContainer}>
        <View style={styles.leftPanelContainer}>
          {leftPanel}
        </View>
        <VerticalSeparator length={13} style={styles.verticalLine} />
        <View style={styles.rightPanelContainer}>
          {rightPanel}
        </View>
      </View>
    </View>
  )
}

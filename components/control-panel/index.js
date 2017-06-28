import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Switch from '../switch'
import timelineStore from '../../stores/timeline'

export default function ControlPanel (props) {
  const leftPanel = props.children[0]
  const rightPanel = props.children[1]
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={styles.separatingLine}>+-------------------------------------+------------------+</Text>
      <View style={{flex: 1, flexDirection: 'row', paddingLeft: 15, paddingRight: 15}}>
        <View style={{flex: 2, marginTop: 5}}>
          {leftPanel}
        </View>
        <Text style={styles.verticalLine}>{" |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n"}</Text>
        <View style={{flex: 1, marginTop: 5}}>
          {rightPanel}
        </View>
      </View>
    </View>
  )
}

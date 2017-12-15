import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'
import padStart from 'string.prototype.padstart'

import clockStore from '../../stores/clock'

function createTextBar (progress) {
  const fillCount = Math.round(progress / 2)
  return Array(50).fill().map((n, i) => i <= fillCount ? '=' : '-').join('')
}

@observer
export default class Power extends Component {
  render () {
    const name = this.props.name
    const timeLeft = this.props.timeLeft
    const spinChar = clockStore.spinnerChar
    const progress = this.props.progress
    const bar = createTextBar(progress)
    const paddedProgress = padStart(progress, 3)
    const barString = `${spinChar} |${bar}| ${paddedProgress}% ${timeLeft}`
    return (
      <View style={StyleSheet.flatten([{justifyContent: 'space-around', flexDirection: 'row'}, this.props.style || {}])}>
        <Text key={1} style={styles.name}>{name}</Text>
        <Text key={2} style={styles.barLine}>{barString}</Text>
      </View>
    )
  }
}

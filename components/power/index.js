import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'
import padStart from 'string.prototype.padstart'

const spinnerChars = [ '|', '/', '-', '\\', '|', '/', '-', '\\' ]

function createTextBar (progress) {
  const fillCount = Math.round(progress / 2)
  return Array(50).fill().map((n, i) => i <= fillCount ? '=' : '-').join('')
}

export default class Power extends Component {
  state = {
    spinCharIndex: 0
  }
  componentDidMount () {
    clearInterval(this.interval)
    this.interval = setInterval(() => this.progressSpinChar(), 125)
  }
  componentWillReceiveProps () {
    clearInterval(this.interval)
    this.setState({spinCharIndex: 0})
    this.interval = setInterval(() => this.progressSpinChar(), 125)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  progressSpinChar () {
    const currentIndex = this.state.spinCharIndex
    const nextIndex = currentIndex + 1 >= spinnerChars.length
      ? 0
      : currentIndex + 1
    this.setState({spinCharIndex: nextIndex})
  }
  render () {
    const name = this.props.name
    const timeLeft = this.props.timeLeft
    const spinChar = spinnerChars[this.state.spinCharIndex]
    const progress = this.props.progress
    const bar = createTextBar(progress)
    const paddedProgress = padStart(progress, 3)
    const barString = `${spinChar} |${bar}| ${paddedProgress}% ${timeLeft}`
    return (
      <View style={StyleSheet.flatten([{flexDirection: 'row'}, this.props.style || {}])}>
        <Text key={1} style={styles.name}>{name}</Text>
        <Text key={2} style={styles.barLine}>{barString}</Text>
      </View>
    )
  }
}

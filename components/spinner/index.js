import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const spinnerChars = [ '|', '/', '-', '\\', '|', '/', '-', '\\' ]

export default class Spinner extends Component {
  state = {
    spinCharIndex: 0
  }
  componentDidMount () {
    clearInterval(this.interval)
    this.interval = setInterval(() => this.progressSpinChar(), 50)
  }
  componentWillReceiveProps () {
    clearInterval(this.interval)
    this.setState({spinCharIndex: 0})
    this.interval = setInterval(() => this.progressSpinChar(), 50)
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
    return (
      <View style={styles.spinnerContainer}>
        <Text style={styles.spinner}>{spinnerChars[this.state.spinCharIndex]}</Text>
      </View>
    )
  }
}

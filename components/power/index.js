import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './styles'

const spinnerChars = [ '|', '/', '-', '\\', '|', '/', '-', '\\' ]

function createTextBar (progress) {
  const fillCount = Math.round(progress / 2)
  return Array(50).fill().map((n, i) => i <= fillCount ? '=' : '-').join('')
}

function padProgress (progress) {
  if (progress < 100 && progress > 9) {
    return ` ${progress}`
  } else if (progress < 10) {
    return `  ${progress}`
  } else {
    return `${progress}`
  }
}

export default class Power extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spinCharIndex: 0
    }
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
    const nextIndex = currentIndex + 1 >= spinnerChars.length ? 0 : currentIndex + 1
    this.setState({spinCharIndex: nextIndex})
  }
  render () {
    const name = this.props.name
    const timeLeft = this.props.timeLeft
    const spinChar = spinnerChars[this.state.spinCharIndex]
    const progress = this.props.progress
    const bar = createTextBar(progress)
    const paddedProgress = padProgress(progress)
    const barString = `${name} ${spinChar} |${bar}| ${paddedProgress}% ${timeLeft}`
    return (
      <Text style={styles.barLine}>{barString}</Text>
    )
  }
}

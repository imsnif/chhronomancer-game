import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProgressBar from '../progress-bar'
import styles from './styles'

const spinnerChars = [ '|', '/', '-', '\\', '|', '/', '-', '\\' ]

export default class Power extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spinCharIndex: 0
    }
  }
  componentDidMount () {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      console.log('ticking')
      const currentIndex = this.state.spinCharIndex
      const nextIndex = currentIndex + 1 >= spinnerChars.length ? 0 : currentIndex + 1
      this.setState({spinCharIndex: nextIndex})
    }, 125)
  }
  componentWillReceiveProps () {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      console.log('ticking')
      const currentIndex = this.state.spinCharIndex
      const nextIndex = currentIndex + 1 >= spinnerChars.length ? 0 : currentIndex + 1
      this.setState({spinCharIndex: nextIndex})
    }, 125)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    const name = this.props.name
    const timeLeft = this.props.timeLeft
    const fillCount = Math.round(this.props.progress / 2)
    const emptyCount = 50 - fillCount
    const spinChar = spinnerChars[this.state.spinCharIndex]
    let bar = []
    for (let i = 0; i < 50; i += 1) {
      if (i <= fillCount) {
        bar.push('=')
      } else {
        bar.push('-')
      }
    }
    const progress = this.props.progress
    const paddedProgress = progress < 100 && progress > 9
      ? ` ${progress}`
      : progress < 10
      ? `  ${progress}`
      : `${progress}`
    const barString = `${name} ${spinChar} |${bar.join('')}| ${paddedProgress}% ${timeLeft}`
    return (
      <Text style={{
        fontFamily: 'telegrama_raw',
        color: '#00ff00',
        marginLeft: 9,
        marginTop: 15,
        fontSize: 6
      }}>{barString}</Text>
    )
  }
}

import React, { Component } from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import styles from './styles'

function cycleAnimation () {
  Animated.sequence([
    Animated.timing(this.state.barOpacity, {
      toValue: 300,
      duration: 1500
    }),
    Animated.timing(this.state.barOpacity, {
      toValue: 0,
      duration: 1500
    })
  ]).start(event => {
    if (event.finished) {
      cycleAnimation.call(this)
    }
  })
}

export default class ProgressBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      barOpacity: new Animated.Value(0),
      progress: new Animated.Value(props.progress)
    }
  }
  componentDidMount () {
    cycleAnimation.call(this)
  }
  componentWillReceiveProps (props) {
    Animated.timing(
      this.state.progress,
      {
        toValue: Math.ceil(props.progress) || this.state.progress,
        duration: 300
      }
    ).start()
  }
  render () {
    const color = this.state.barOpacity.interpolate({
      inputRange: [0, 300],
      outputRange: ['rgb(2, 255, 255)', 'rgb(255, 255, 255)']
    })
    const progress = this.state.progress.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
    return (
      <View style={styles.container}>
        <View style={styles.barBorder}>
          <View style={styles.barBox}>
            <Animated.View style={
              StyleSheet.flatten([
                styles.progressIndicator,
                {width: progress, backgroundColor: color}
              ])
            } />
            <View style={styles.childrenContainer}>
              {this.props.children}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

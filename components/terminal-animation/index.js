import React, { Component } from 'react'
import { View, Animated } from 'react-native'

import commonStyles from '../common/styles'

const animationStatsLong = {
  delay: 1000,
  duration: 0
}

const animationStatsVeryLong = {
  delay: 4000,
  duration: 0
}

const animationStatsShort = {
  delay: 300,
  duration: 0
}

const animationStatsVeryShort = {
  delay: 150,
  duration: 0
}

// TODO: refactor
export default class TerminalAnimation extends Component {
  state = {
    spinValue: new Animated.Value(1),
    stretchValue: new Animated.Value(1),
    margin: new Animated.Value(1)
  }
  componentDidMount () {
    this.animationSequence()
    this.marginAnimation()
  }
  marginAnimation () {
    Animated.sequence([
      Animated.timing(
        this.state.margin,
        Object.assign({}, animationStatsVeryShort, {toValue: 2})
      ),
      Animated.timing(
        this.state.margin,
        Object.assign({}, animationStatsVeryShort, {toValue: 1})
      )
    ]).start(() => this.marginAnimation())
  }
  animationSequence () {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.spinValue,
          Object.assign({}, animationStatsLong, {toValue: 2})
        ),
        Animated.timing(
          this.state.stretchValue,
          Object.assign({}, animationStatsLong, {toValue: 2})
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.spinValue,
          Object.assign({}, animationStatsShort, {toValue: 1})
        ),
        Animated.timing(
          this.state.stretchValue,
          Object.assign({}, animationStatsShort, {toValue: 1})
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.spinValue,
          Object.assign({}, animationStatsVeryLong, {toValue: 0})
        ),
        Animated.timing(
          this.state.stretchValue,
          Object.assign({}, animationStatsVeryLong, {toValue: 2})
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.spinValue,
          Object.assign({}, animationStatsShort, {toValue: 1})
        ),
        Animated.timing(
          this.state.stretchValue,
          Object.assign({}, animationStatsShort, {toValue: 1})
        )
      ])
    ]).start(() => this.animationSequence())
  }
  render () {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 2],
      outputRange: ['-60deg', '60deg']
    })
    const stretch = this.state.stretchValue.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 3]
    })
    const shrink = this.state.stretchValue.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 0.3]
    })
    const marginLeft = this.state.margin.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2]
    })
    const marginRight = this.state.margin.interpolate({
      inputRange: [1, 2],
      outputRange: [2, 1]
    })
    return (
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: commonStyles.backGround
      }}>
        <Animated.View style={{
          backgroundColor: commonStyles.backGround,
          width: '100%',
          height: '100%',
          transform: [
            {rotate: spin}, {scaleX: stretch}, {scaleY: shrink}
          ],
          left: marginLeft,
          right: marginRight
        }}>
          {this.props.children}
        </Animated.View>
      </View>
    )
  }
}

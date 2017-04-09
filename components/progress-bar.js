import React, { Component } from 'react';
import { AppRegistry, View, Text, Animated } from 'react-native';

function cycleAnimation() {
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
  constructor(props) {
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
  render() {
    const color = this.state.barOpacity.interpolate({
      inputRange: [0, 300],
      outputRange: ['rgb(2, 255, 255)', 'rgb(255, 255, 255)']
    })
    const progress = this.state.progress.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
    return (
      <View style={{backgroundColor: '#2f3241', flex: 1, padding: 5}}>
        <View style={{backgroundColor: '#02ffff', borderRadius: 2, flex: 1, padding: 2}}>
          <View style={{justifyContent: 'center', backgroundColor: '#2f3241', flex: 1, width: '100%', borderRadius: 2}}>
            <Animated.View style={{
              width: progress,
              backgroundColor: color,
              height: '100%',
              flex: 1,
              borderRadius: 2,
              position: 'absolute',
            }} />
            <View style={{elevation: 6, backgroundColor: 'transparent', width: '100%', height: '100%', flexDirection: 'row'}}>
              {this.props.children}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

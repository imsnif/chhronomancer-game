import React from 'react'
import { Navigator } from 'react-native'

import renderScene from './render-scene'

const InstantTransition = {
  gestures: null,
  defaultTransitionVelocity: null,
  springFriction: null,
  springTension: 1000,
  animationInterpolators: {
    into: r => {
      r.opacity = 1
      return true
    },
    out: r => {
      r.opacity = 1
      return true
    }
  }
}

export default function Game (props) {
  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{ screenName: props.screenName }}
      renderScene={renderScene}
      configureScene={() => InstantTransition}
    />
  )
}

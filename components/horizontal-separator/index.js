import React from 'react'
import { StyleSheet, Image } from 'react-native'
import horizontalBarImg from '../../assets/horizontal-bar.png'

export default function HorizontalSeparator (props) {
  // TODO: solve ths issue where this flickers when rerendering the component
  return (
    <Image source={horizontalBarImg} style={StyleSheet.flatten([{width: '100%', resizeMode: 'stretch', height: '100%'}, props.style])} />
  )
}

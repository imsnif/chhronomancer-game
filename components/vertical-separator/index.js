import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
// import styles from './styles'
import verticalBar from '../../assets/vertical-bar.png'

export default function VerticalSeparator (props) {
  return (
    <View style={StyleSheet.flatten([{width: '100%', height: '100%'}, props.style])}>
      <Image source={verticalBar} style={{width: '100%', height: '100%'}} />
    </View>
  )
}

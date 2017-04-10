import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import styles from './styles'

export default function Item (props) {
  const topStyle = StyleSheet.flatten([
    styles.diamondShieldTop,
    { borderBottomColor: props.color }
  ])
  const bottomStyle = StyleSheet.flatten([
    styles.diamondShieldBottom,
    { borderTopColor: props.color }
  ])
  const boxStyle = StyleSheet.flatten([
    styles.boxStyle,
    { backgroundColor: props.fill ? '#02ffff' : '#2f3241' }
  ])
  return (
    <View style={boxStyle}>
      <View style={styles.diamondShield}>
        <View style={topStyle}/>
        <View style={bottomStyle}/>
      </View>
    </View>
  )
}

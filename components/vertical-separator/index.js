import React from 'react'
import { Text, StyleSheet } from 'react-native'
import styles from './styles'

export default function VerticalSeparator (props) {
  const line = Array(props.length).fill(' |\n').join('')
  return (
    <Text
      style={StyleSheet.flatten([styles.separator, props.style || {}])}
    >{line}</Text>
  )
}

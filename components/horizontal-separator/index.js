import React from 'react'
import { Text, StyleSheet } from 'react-native'
import styles from './styles'

export default function HorizontalSeparator (props) {
  const plusAt = props.plusAt || []
  const line = Array(props.length).fill('-').map((m, i) => plusAt.includes(i) ? '+' : m).join('')
  return (
    <Text
      style={StyleSheet.flatten([styles.separator, props.style || {}])}
    >{`+${line}+`}</Text>
  )
}

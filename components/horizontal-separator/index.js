import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

export default function HorizontalSeparator (props) {
  const line = Array(props.length).fill('-').join('')
  return (
    <Text style={styles.separator}>{`+${line}+`}</Text>
  )
}

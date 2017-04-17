import React from 'react'
import { View, StyleSheet } from 'react-native'
import styles from './styles'

export default function Item (props) {
  return (
    <View style={StyleSheet.flatten([
      styles.diamond,
      {borderColor: props.color},
      props.fill ? {backgroundColor: props.color} : {}
    ])} />
  )
}

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function InfoBox (props) {
  const title = props.title
  const image = props.image
  return (
    <View style={styles.outerBox}>
      <View style={styles.titleBar}>
        <Image source={image} style={styles.imageBox} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.contentBox}>{props.children}</View>
    </View>
  )
}

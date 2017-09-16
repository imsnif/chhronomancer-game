import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function ListBox (props) {
  const { title, subtitle, image, children } = props
  return (
    <View style={styles.outerBox}>
      <View style={styles.titleBar}>
        {
          image && image.uri
            ? <Image source={{uri: image.uri}} style={styles.imageBox}>
              <View style={styles.imageOverlay} />
            </Image>
            : image ? <Image source={image} style={styles.imageBox} /> : null
        }
        <Text numberOfLines={1} style={subtitle ? styles.titleTextWithSubtitle : styles.titleText}>{title}</Text>
        {subtitle ? <Text numberOfLines={1} style={styles.subtitleText}>{subtitle}</Text> : null}
      </View>
      <View style={styles.contentBox}>{children}</View>
    </View>
  )
}

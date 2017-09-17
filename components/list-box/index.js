import React, {Component} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import styles from './styles'

export default class ListBox extends Component {
  setNativeProps (nativeProps) {
    if (this._root) this._root.setNativeProps(nativeProps)
  }
  render () {
    const {
      title,
      subtitle,
      image,
      rightImage,
      children,
      style
    } = this.props
    return (
      <View style={StyleSheet.flatten([styles.outerBox, style || {}])}>
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
          {rightImage ? <Image source={rightImage} style={styles.imageBox} /> : null}
        </View>
        <View style={styles.contentBox}>{children}</View>
      </View>
    )
  }
}

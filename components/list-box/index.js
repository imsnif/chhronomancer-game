import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default class ListBox extends Component {
  setNativeProps (nativeProps) {
    if (this._root) this._root.setNativeProps(nativeProps)
  }
  render () {
    const title = this.props.title
    const subtitle = this.props.subtitle
    const image = this.props.image
    return (
      <View style={styles.outerBox}>
        <View style={styles.titleBar}>
          {image ? <Image source={image} style={styles.imageBox} /> : null}
          <Text style={subtitle ? styles.titleTextWithSubtitle : styles.titleText}>{title}</Text>
          {subtitle ? <Text style={styles.subtitleText}>{subtitle}</Text> : null}
        </View>
        <View style={styles.contentBox}>{this.props.children}</View>
      </View>
    )
  }
}

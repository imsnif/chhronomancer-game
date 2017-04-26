import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

// TODO: merge with info-box
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
          <Image source={image} style={styles.imageBox} />
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
        <View style={styles.contentBox}>{this.props.children}</View>
      </View>
    )
  }
}

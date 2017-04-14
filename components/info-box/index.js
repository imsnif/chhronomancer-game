import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default class InfoBox extends Component {
  render () {
    const title = this.props.title
    const image = this.props.image
    return (
      <View style={styles.outerBox}>
        <View style={styles.titleBar}>
          <Image source={image} style={styles.imageBox} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.contentBox}>{this.props.children}</View>
      </View>
    )
  }
}

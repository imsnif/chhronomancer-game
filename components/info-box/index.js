import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default class InfoBox extends Component {
  setNativeProps (nativeProps) {
    if (this._root) this._root.setNativeProps(nativeProps)
  }
  render () {
    const title = this.props.title
    const image = this.props.image
    const rightImage = this.props.rightImage
    return (
      <View style={styles.outerBox}>
        <View style={styles.titleBar}>
        {
          image.type === 'player'
            ? <Image style={styles.imageBox} source={{uri: image.uri}}>
                <View style={{width: '100%', height: '100%', backgroundColor: 'green', opacity: 0.5}} />
              </Image>
            : <Image source={image} style={styles.imageBox} />
        }
          <Text style={styles.titleText}>{title}</Text>
          { rightImage ? <Image source={rightImage} style={styles.imageBox} /> : null }
        </View>
        <View style={styles.contentBox}>{this.props.children}</View>
      </View>
    )
  }
}

import React, { Component } from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import styles from './styles'

import commonStyles from '../common/styles'

export default class MenuButton extends Component {
  constructor (props) {
    super(props)
    this.state = { pressStatus: false }
  }
  _onHideUnderlay () {
    this.setState({ pressStatus: false })
  }
  _onShowUnderlay () {
    this.setState({ pressStatus: true })
  }
  render () {
    const fontSize = this.props.fontSize
    const style = this.props.style
    const textStyle = fontSize ? StyleSheet.flatten([styles.text, {fontSize}]) : styles.text
    const pressedTextStyle = fontSize ? StyleSheet.flatten([styles.textPress, {fontSize}]) : styles.textPress
    const buttonContainerStyle = style ? StyleSheet.flatten([styles.buttonContainer, style]) : styles.buttonContainer
    return (
      <View style={buttonContainerStyle}>
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor={commonStyles.foreGround}
          style={this.state.pressStatus ? styles.buttonPress : styles.button}
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
        >
          <Text style={this.state.pressStatus ? pressedTextStyle : textStyle}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

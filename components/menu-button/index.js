import React, { Component } from 'react'
import Spinner from '../spinner'
import { View, TouchableHighlight, Text, StyleSheet, Vibration } from 'react-native'
import styles from './styles'

import commonStyles from '../common/styles'

export default class MenuButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pressStatus: props.pressStatus,
      loading: false
    }
  }
  componentDidMount () {
    this._isMounted = true
  }
  componentWillUnmount () {
    this._isMounted = false
  }
  _onHideUnderlay () {
    if (this.props.disabled) return
    this.setState({ pressStatus: false })
  }
  _onShowUnderlay () {
    if (this.props.disabled) return
    this.setState({ pressStatus: true })
  }
  async _pressAction () {
    if (this.props.disabled) {
      Vibration.vibrate(50)
      return
    }
    if (!this.props.onPress) return
    if (this.props.syncAction) return this.props.onPress()
    try {
      this.setState({loading: true})
      await this.props.onPress()
      if (this._isMounted) this.setState({loading: false, pressStatus: false})
    } catch (e) {
      if (this._isMounted) this.setState({loading: false, pressStatus: false})
    }
  }
  render () {
    const { fontSize, style, disabled } = this.props
    const textStyle = fontSize
      ? StyleSheet.flatten([styles.text, {fontSize}])
      : styles.text
    const pressedTextStyle = fontSize
      ? StyleSheet.flatten([styles.textPress, {fontSize}])
      : styles.textPress
    const buttonContainerStyle = style
      ? StyleSheet.flatten([styles.buttonContainer, style])
      : styles.buttonContainer
    const buttonStyle = disabled
      ? styles.buttonDisabled
      : this.state.pressStatus
      ? styles.buttonPress
      : styles.button
    return (
      <View style={buttonContainerStyle}>
        {
          this.state.loading
          ? <Spinner />
          : <TouchableHighlight
            onPress={this._pressAction.bind(this)}
            underlayColor={disabled ? commonStyles.backGround : commonStyles.foreGround}
            style={buttonStyle}
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}
          >
            <Text style={this.state.pressStatus ? pressedTextStyle : textStyle}>{this.props.title}</Text>
          </TouchableHighlight>
        }
      </View>
    )
  }
}

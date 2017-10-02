import React, { Component } from 'react'
import Spinner from '../spinner'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
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
    this.setState({ pressStatus: false })
  }
  _onShowUnderlay () {
    this.setState({ pressStatus: true })
  }
  async _pressAction () {
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
    const { fontSize, style } = this.props
    const textStyle = fontSize ? StyleSheet.flatten([styles.text, {fontSize}]) : styles.text
    const pressedTextStyle = fontSize ? StyleSheet.flatten([styles.textPress, {fontSize}]) : styles.textPress
    const buttonContainerStyle = style ? StyleSheet.flatten([styles.buttonContainer, style]) : styles.buttonContainer
    const loading = this.state.loading
    if (loading) {
      return (
        <View style={buttonContainerStyle}>
          <Spinner />
        </View>
      )
    } else {
      return (
        <View style={buttonContainerStyle}>
          <TouchableHighlight
            onPress={this._pressAction.bind(this)}
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
}

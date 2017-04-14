import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native'
import Button from 'react-native-button'
import styles from './styles'

export default class MenuButton extends Component {
  constructor (props) {
    super(props)
    this.state = { pressStatus: false }
  }
  _onHideUnderlay () {
    this.setState({ pressStatus: false  });
  }
  _onShowUnderlay () {
    this.setState({ pressStatus: true  });
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor='#02ffff'
          style={ this.state.pressStatus ? styles.buttonPress : styles.button }
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
        >
          <Text style={ this.state.pressStatus ? styles.textPress : styles.text}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

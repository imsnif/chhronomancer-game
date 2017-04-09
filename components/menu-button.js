import React, { Component } from 'react'
import { AppRegistry, View, TouchableHighlight, StyleSheet, Text } from 'react-native'
import Button from 'react-native-button'

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
      <View style={{width: '100%', flex: 1, margin: 7}}>
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

const styles = StyleSheet.create({
  text: {
    // fontSize: 10,
    color: '#02ffff',
    textAlign: 'center',
    paddingTop: 12
  },
  textPress: {
    // fontSize: 10,
    color: '#2e1a29',
    textAlign: 'center',
    paddingTop: 12
  },
  button: {
    width: '100%',
    flex: 1,
    borderRadius: 2,
    borderColor: '#02ffff',
    backgroundColor: '#2f3241',
    borderWidth: 2
  },
  buttonPress: {
    width: '100%',
    flex: 1,
    borderRadius: 2,
    backgroundColor: '#02ffff',
    borderColor: '#02ffff',
    borderWidth: 1
  }
})

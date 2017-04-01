import React, { Component } from 'react'
import { AppRegistry, View, Button} from 'react-native'
import { Container, Header, Body, Footer } from 'native-base'
import ItemBar from './item-bar'

export default class MenuButton extends Component {
  render() {
    return (
      <View style={{margin: 5}}>
        <Button title={this.props.title} onPress={this.props.onPress} />
      </View>
    )
  }
}

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Item from './item'

export default class LowItems extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Item key={1} fill={false} color='black' />
      </View>
    )
  }
}

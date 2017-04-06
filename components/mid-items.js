import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Item from './item'

export default class LowItems extends Component {
  render() {
    const items = this.props.items
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Item key={1} fill={items.purple} color='purple' />
        <Item key={2} fill={items.brown} color='brown' />
      </View>
    )
  }
}

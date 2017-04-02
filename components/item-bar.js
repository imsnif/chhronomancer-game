import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Item from './item'

export default class ItemBar extends Component {
  render() {
    let items = []
    for (let i = 0; i < this.props.count; i += 1) {
      items.push(<Item key={i}/>)
    }
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {items}
      </View>
    );
  }
};

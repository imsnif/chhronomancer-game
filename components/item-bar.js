import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Item from './item'

export default class ItemBar extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Item style={{height: '100%'}}/>
        <Item style={{height: '100%'}}/>
        <Item style={{height: '100%'}}/>
      </View>
    );
  }
};

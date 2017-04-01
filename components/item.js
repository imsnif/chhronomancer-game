import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';

export default class Item extends Component {
  // TODO: fix hard-coded style values
  render() {
    return (
      <Image style={{margin: 5, width: 20, height: 20, backgroundColor: 'gray'}} source={require('../assets/stone.png')} />
    );
  }
};

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Container, Header, Body, Footer } from 'native-base'
import ItemBar from './item-bar'

export default class Player extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', padding: 5}}>
        <Text style={{width: '30%', backgroundColor: 'powderblue'}}>Picture</Text>
        <View style={{flex: 1, flexDirection: 'column', width: '70%', backgroundColor: 'skyblue', padding: 5}}>
          <Text style={{width: '100%', backgroundColor: 'steelblue', padding: 5}}>Name</Text>
          <Text style={{width: '100%', backgroundColor: 'steelblue', padding: 5}}>Power</Text>
          <ItemBar count={3} style={{width: '100%', backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};

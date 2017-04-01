import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Container, Header, Body, Footer } from 'native-base'
import Item from './item'

export default class Player extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Item />
          <Text style={{backgroundColor: 'powderblue', width: '100%'}}>Timeline Name</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{backgroundColor: 'steelblue', borderWidth: 1, padding: 2}}>Picture</Text>
          <Text style={{backgroundColor: 'steelblue', borderWidth: 1, padding: 2}}>Picture</Text>
          <Text style={{backgroundColor: 'steelblue', borderWidth: 1, padding: 2}}>Picture</Text>
        </View>
      </View>
    );
  }
};

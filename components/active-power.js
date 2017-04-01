import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Container, Header, Body, Footer } from 'native-base'
import Item from './item'

export default class ActivePower extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{backgroundColor: 'powderblue', width: '30%'}}>Picture</Text>
          <Text style={{backgroundColor: 'powderblue', width: '70%'}}>Power Name</Text>
        </View>
        <Text style={{color: 'red'}}>05:42</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{color: 'green'}}>5</Text>
          <Text style={{color: 'black'}}>/</Text>
          <Text style={{color: 'red'}}>6</Text>
        </View>
      </View>
    );
  }
};

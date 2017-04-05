import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import ProgressBar from './progress-bar'

export default class Power extends Component {
  render() {
    return (
      <ProgressBar progress='50%'>
        <Text style={{color: '#2e1a29', flex: 2, margin: 5}}>Questing...</Text>
        <Text style={{color: 'red', flex: 2, margin: 5}}>00:22:50</Text>
        <View style={{flex: 1, margin: 5, flexDirection: 'row'}}>
          <Text style={{color: 'green'}}>5</Text>
          <Text style={{color: '#02ffff'}}>/</Text>
          <Text style={{color: 'red'}}>4</Text>
        </View>
      </ProgressBar>
    )
  }
};

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import ProgressBar from './progress-bar'

export default class Power extends Component {
  render() {
    return (
      <ProgressBar progress={this.props.progress}>
        <Text style={{color: '#2e1a29', flex: 2, margin: 5}}>{this.props.name}...</Text>
        <Text style={{color: 'red', flex: 2, margin: 5}}>{this.props.timeLeft}</Text>
        <View style={{flex: 1, margin: 5, flexDirection: 'row'}}>
          <Text style={{color: 'green'}}>{this.props.alliedPlayers}</Text>
          <Text style={{color: '#2e1a29'}}>/</Text>
          <Text style={{color: 'red'}}>{this.props.enemyPlayers}</Text>
        </View>
      </ProgressBar>
    )
  }
};

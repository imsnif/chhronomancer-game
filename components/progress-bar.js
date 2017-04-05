import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class ProgressBar extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#2f3241', flex: 1, padding: 5}}>
        <View style={{backgroundColor: '#02ffff', borderRadius: 2, flex: 1, padding: 2}}>
          <View style={{backgroundColor: '#2f3241', flex: 1, width: '100%', borderRadius: 2}}>
            <View style={{backgroundColor: '#02ffff', width: this.props.progress, height: '92%', flex: 1, borderRadius: 2, margin: 1, position: 'absolute'}} />
            <View style={{backgroundColor: 'transparent', width: '100%', height: '100%', flexDirection: 'row'}}>
              {this.props.children}
            </View>
          </View>
        </View>
      </View>
    )
  }
};

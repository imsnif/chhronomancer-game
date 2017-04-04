import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class Power extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#2f3241',
        flex: 1,
        padding: 5
      }}>
        <View style={{
          backgroundColor: '#02ffff',
          borderRadius: 2,
          flex: 1,
          padding: 2
        }}>
          <View style={{
            backgroundColor: '#2f3241',
            flex: 1,
            width: '100%',
            borderRadius: 2
          }}>
            <View style={{
              backgroundColor: '#02ffff',
              width: '50%',
              height: '92%',
              flex: 1,
              borderRadius: 2,
              margin: 1,
              position: 'absolute'
            }} />
            <View style={{
              backgroundColor: 'transparent',
              width: '100%',
              height: '100%',
              flexDirection: 'row'
            }}>
              <Text style={{
                color: '#2e1a29',
                flex: 1,
                margin: 5
              }}>Questing...</Text>
              <Text style={{
                color: 'red',
                flex: 1,
                margin: 5
              }}>00:00</Text>
              <View style={{
                flex: 1,
                margin: 5,
                flexDirection: 'row'
              }}>
                <Text style={{color: 'green'}}>5</Text>
                <Text style={{color: '#02ffff'}}>/</Text>
                <Text style={{color: 'red'}}>4</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
};

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Container, Header, Body, Footer } from 'native-base'
import ItemBar from './item-bar'

export default class Player extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        borderColor: '#02ffff',
        backgroundColor: '#02ffff',
        borderWidth: 0.2,
        margin: 5,
        marginBottom: 15,
        borderRadius: 2,
        height: 100
      }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{
            textAlign: 'center',
            margin: 2,
            marginBottom: 1,
            borderRadius: 2,
            flex: 1,
            backgroundColor: '#2f3241'
          }}>P</Text>
          <Text style={{color: '#2e1a29', flex: 9, textAlign: 'center', paddingRight: 30, paddingTop: 2, fontFamily: 'sans-serif'}}>Name</Text>
        </View>
        <View style={{
          margin: 2,
          flex: 3,
          flexDirection: 'column',
          backgroundColor: '#2f3241',
          borderColor: '#2f3241',
          borderWidth: 1,
          borderRadius: 2
        }}>
          <Text style={{color: '#81bcca', padding: 5, textAlign: 'center'}}>Power</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>
            <ItemBar count={3} style={{backgroundColor: '#2f3241'}} />
            <ItemBar count={2} style={{backgroundColor: '#2f3241'}} />
            <ItemBar count={1} style={{backgroundColor: '#2f3241'}} />
          </View>
        </View>
      </View>
    )
  }
};

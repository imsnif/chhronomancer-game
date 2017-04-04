import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import LowItems from './low-items'
import MidItems from './mid-items'
import HighItems from './high-items'
import ItemBar from './item-bar'
import Power from './power'

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
          <Image source={require('../assets/placeholders/tom.jpg')} style={{
            width: 10,
            height: 21,
            margin: 2,
            marginBottom: 1,
            borderRadius: 2,
            flex: 1,
            backgroundColor: '#2f3241'
          }} />
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
          <Power />
          <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>
            <LowItems />
            <MidItems />
            <HighItems />
          </View>
        </View>
      </View>
    )
  }
};
//            <ItemBar count={3} style={{backgroundColor: '#2f3241'}} />
//            <ItemBar count={2} style={{backgroundColor: '#2f3241'}} />
//            <ItemBar count={1} style={{backgroundColor: '#2f3241'}} />

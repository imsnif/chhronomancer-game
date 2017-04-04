import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import LowItems from './low-items'
import MidItems from './mid-items'
import HighItems from './high-items'
import ItemBar from './item-bar'
import Power from './power'

export default class InfoBox extends Component {
  render() {
    const title = this.props.title
    const image = this.props.image
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
          <Image source={image} style={{
            width: 10,
            height: 21,
            margin: 2,
            marginBottom: 1,
            borderRadius: 2,
            flex: 1,
            backgroundColor: '#2f3241'
          }} />
          <Text style={{
            color: '#2e1a29',
            flex: 9,
            textAlign: 'center',
            paddingRight: 30,
            paddingTop: 2,
            fontFamily: 'sans-serif'
          }}>{this.props.title}</Text>
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
          {this.props.children}
        </View>
      </View>
    )
  }
}

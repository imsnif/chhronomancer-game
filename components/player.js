import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import InfoBox from './info-box'
import LowItems from './low-items'
import MidItems from './mid-items'
import HighItems from './high-items'
import Power from './power'

export default class Player extends Component {
  render() {
    return (
      <InfoBox title='Name' image={require('../assets/placeholders/tom.jpg')}>
        <Power />
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <LowItems />
          <MidItems />
          <HighItems />
        </View>
      </InfoBox>
    )
  }
}

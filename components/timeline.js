import React, { Component } from 'react'
import { ScrollView, View, Button} from 'react-native'
import { Container, Header, Body, Footer } from 'native-base'
import MenuButton from './menu-button'
import Player from './player'

export default class Timeline extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '30%', flexDirection: 'column'}}>
          <MenuButton title='Lock' onPress={() => {}} />
          <MenuButton title='Unlock' onPress={() => {}} />
          <MenuButton title='Reset' onPress={() => {}} />
          <MenuButton title='Quest' onPress={() => {}} />
          <MenuButton title='Travel Here' onPress={() => {}} />
        </View>
        <ScrollView style={{width: '70%'}}>
          <Player />
          <Player />
          <Player />
        </ScrollView>
      </View>
    )
  }
}

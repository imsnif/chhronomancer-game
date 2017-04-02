import React, { Component } from 'react'
import { ScrollView, View, Button} from 'react-native'
import { Container, Header, Body, Footer } from 'native-base'
import MenuButton from './menu-button'
import Player from './player'

export default class Timeline extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#2f3241'}}>
        <View style={{flex: 1, borderWidth: 5, borderColor: 'black', borderStyle: 'dashed'}}>
          <ScrollView style={{flex: 1, padding: 5}}>
            <Player />
            <Player />
            <Player />
            <Player />
            <Player />
            <View style={{height: 10}}/>
          </ScrollView>
        </View>
        <View style={{flex: 0, height: 60, flexDirection: 'row', justifyContent: 'center'}}>
          <MenuButton title='Reset' onPress={() => {}} />
          <MenuButton title='Quest' onPress={() => {}} />
        </View>
        <View style={{flex: 0, height: 60, flexDirection: 'row', justifyContent: 'center'}}>
          <MenuButton title='Lock' onPress={() => {}} />
          <MenuButton title='Unlock' onPress={() => {}} />
        </View>
        <View style={{flex: 0, height: 60, flexDirection: 'row', justifyContent: 'center'}}>
          <MenuButton title='Travel Here' onPress={() => {}} />
        </View>
      </View>
    )
  }
}

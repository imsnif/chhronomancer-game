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
            <Player
              name="Aram"
              image={require('../assets/placeholders/me.jpeg')}
              activePower="Questing"
              progress="50%"
              timeLeft="00:22:50"
              alliedPlayers={5}
              enemyPlayers={4}
              items={{
                red: true,
                green: false,
                blue: true,
                purple: false,
                brown: false,
                black: false
              }}
            />
            <Player
              name="Tom"
              image={require('../assets/placeholders/tom.jpg')}
              activePower="Reseting"
              progress="90%"
              timeLeft="00:00:50"
              alliedPlayers={5}
              enemyPlayers={4}
              items={{
                red: true,
                green: true,
                blue: true,
                purple: false,
                brown: false,
                black: false
              }}
            />
            <Player
              name="Gondollieri"
              image={require('../assets/placeholders/gondollieri.jpg')}
              activePower="Combining"
              progress="95%"
              timeLeft="00:00:30"
              alliedPlayers={5}
              enemyPlayers={4}
              items={{
                red: true,
                green: true,
                blue: true,
                purple: true,
                brown: true,
                black: false
              }}
            />
            <Player
              name="Simmons"
              image={require('../assets/placeholders/simmons.jpg')}
              activePower="Questing"
              progress="10%"
              timeLeft="00:52:50"
              alliedPlayers={5}
              enemyPlayers={4}
              items={{
                red: true,
                green: true,
                blue: true,
                purple: true,
                brown: false,
                black: false
              }}
            />
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

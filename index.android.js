/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Button
} from 'react-native';

import Inventory from './components/inventory'
import Timeline from './components/timeline'
import playersStore from './stores/players'
import timelineStore from './stores/timeline'

playersStore.addPlayer({
  id: 1,
  name: 'Aram',
  items: {
    red: true,
    green: true,
    blue: true,
    purple: true,
    brown: false,
    black: false
  },
  image: require('./assets/placeholders/me.jpeg'),
  activePower: {
    name: 'Questing',
    progress: '50%',
    timeLeft: '00:22:50',
    alliedPlayers: 5,
    enemyPlayers: 4
  }
})
timelineStore.addPlayer(1)

export default class chronomancer extends Component {
  render() {
    return (
      <Timeline playersStore={playersStore} timelineStore={timelineStore}/>
    )
  }
}

AppRegistry.registerComponent('chronomancer', () => chronomancer);

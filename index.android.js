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
import clockStore from './stores/clock'

playersStore.addPlayer({
  id: 1,
  name: 'Aram',
  items: {
    red: true,
    green: true,
    blue: true,
    purple: true,
    brown: false,
    yellow: false
  },
  image: require('./assets/placeholders/me.jpeg'),
  activePower: {
    name: 'Questing',
    startTime: Date.now(),
    endTime: Date.now() + 1000000,
    alliedPlayers: 5,
    enemyPlayers: 4
  }
})
timelineStore.addPlayer(1)

export default class chronomancer extends Component {
  render() {
    return (
      <Timeline
        playersStore={playersStore}
        timelineStore={timelineStore}
        clockStore={clockStore}
      />
    )
  }
}

AppRegistry.registerComponent('chronomancer', () => chronomancer);

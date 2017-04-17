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
    blue: false,
    purple: false,
    brown: false,
    yellow: false
  },
  image: require('./assets/placeholders/green_me.png'),
  activePower: {
    name: 'Questing',
    startTime: Date.now(),
    endTime: Date.now() + 100000,
    alliedPlayers: 5,
    enemyPlayers: 4
  }
})
timelineStore.addPlayer(1)
playersStore.addPlayer({
  id: 2,
  name: 'Tom',
  items: {
    red: true,
    green: true,
    blue: true,
    purple: true,
    brown: false,
    yellow: false
  },
  image: require('./assets/placeholders/green_tom.png'),
  activePower: {
    name: 'Resetting',
    startTime: Date.now(),
    endTime: Date.now() + 1000000,
    alliedPlayers: 5,
    enemyPlayers: 4
  }
})
timelineStore.addPlayer(2)
playersStore.addPlayer({
  id: 3,
  name: 'Gondollieri',
  items: {
    red: true,
    green: true,
    blue: true,
    purple: true,
    brown: true,
    yellow: false
  },
  image: require('./assets/placeholders/green_gondollieri.png'),
  activePower: {
    name: 'Combining',
    startTime: Date.now(),
    endTime: Date.now() + 2000000,
    alliedPlayers: 5,
    enemyPlayers: 4
  }
})
timelineStore.addPlayer(3)
playersStore.addPlayer({
  id: 4,
  name: 'Simmons',
  items: {
    red: true,
    green: true,
    blue: true,
    purple: true,
    brown: true,
    yellow: false
  },
  image: require('./assets/placeholders/green_simmons.png'),
  activePower: {
    name: 'Locking',
    startTime: Date.now(),
    endTime: Date.now() + 100000,
    alliedPlayers: 5,
    enemyPlayers: 4
  }
})
timelineStore.addPlayer(4)

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

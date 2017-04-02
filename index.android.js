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

export default class chronomancer extends Component {
  render() {
    return (
      <Timeline />
    )
  }
}

AppRegistry.registerComponent('chronomancer', () => chronomancer);

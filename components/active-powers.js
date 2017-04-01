import React, { Component } from 'react'
import { ScrollView, View, Button} from 'react-native'
import { Container, Header, Body, Footer } from 'native-base'
import ActivePower from './active-power'

export default class ActivePowers extends Component {
  render() {
    return (
      <ScrollView style={{width: '100%', flexDirection: 'column'}}>
        <ActivePower />
        <ActivePower />
        <ActivePower />
      </ScrollView>
    )
  }
}

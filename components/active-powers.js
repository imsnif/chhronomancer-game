import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import ActivePower from './active-power'

export default class ActivePowers extends Component {
  render () {
    return (
      <ScrollView style={{width: '100%', flexDirection: 'column'}}>
        <ActivePower />
        <ActivePower />
        <ActivePower />
      </ScrollView>
    )
  }
}

import React, { Component } from 'react'
import { ScrollView, View, Button} from 'react-native'
import { Container, Header, Body, Footer } from 'native-base'
import TimelineSmall from './timeline-small'

export default class TimelineGrid extends Component {
  render() {
    return (
      <ScrollView style={{width: '100%', flexDirection: 'column'}}>
        <TimelineSmall />
        <TimelineSmall />
        <TimelineSmall />
      </ScrollView>
    )
  }
}

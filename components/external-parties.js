import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

export default class ExternalParties extends Component {
  render () {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '30%'}}>Picture</Text>
          <Text style={{width: '40%'}}>Name</Text>
          <Text style={{width: '30%'}}>5</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '30%'}}>Picture</Text>
          <Text style={{width: '40%'}}>Name</Text>
          <Text style={{width: '30%'}}>5</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '30%'}}>Picture</Text>
          <Text style={{width: '40%'}}>Name</Text>
          <Text style={{width: '30%'}}>5</Text>
        </View>
      </ScrollView>
    )
  }
}

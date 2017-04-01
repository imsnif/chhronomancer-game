import React, { Component } from 'react'
import { ScrollView, View, Button, Text} from 'react-native'

export default class Inventory extends Component {
  render() {
    return (
      <View style={{width: '100%', flexDirection: 'column'}}>
        <Text style={{textAlign: 'center'}}>05:42</Text>
        <Text style={{textAlign: 'center'}}>Power Name</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '50%', textAlign: 'center'}}>Src</Text>
          <Text style={{width: '50%', textAlign: 'center'}}>Target</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <ExternalParties title='Allies' />
          <ExternalParties title='Enemies' />
        </View>
      </View>
    )
  }
}

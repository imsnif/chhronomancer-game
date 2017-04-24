import React, { Component } from 'react'
import { View } from 'react-native'
import ItemBar from './item-bar'

export default class Inventory extends Component {
  render () {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <ItemBar count={3} />
        <ItemBar count={2} />
        <ItemBar count={1} />
      </View>
    )
  }
}

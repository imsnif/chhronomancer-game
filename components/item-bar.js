import React, { Component } from 'react'
import { View } from 'react-native'
import Item from './item'

export default class ItemBar extends Component {
  render () {
    let items = []
    let toggle = true
    for (let i = 0; i < this.props.count; i += 1) {
      items.push(<Item key={i} fill={toggle} color={toggle ? 'red' : 'green'} />)
      toggle = !toggle
    }
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        {items}
      </View>
    )
  }
};

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Item from '../item'
import styles from './styles'

export default function LowItems (props) {
  const items = props.items || {}
  return (
    <View style={styles.itemContainer}>
      <Item key={1} fill={items.black} color='black' />
    </View>
  )
}

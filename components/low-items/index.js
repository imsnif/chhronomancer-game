import React from 'react'
import { View } from 'react-native'
import Item from '../item'
import styles from './styles'

export default function LowItems (props) {
  const items = props.items || {}
  return (
    <View style={styles.itemContainer}>
      <Item key={1} fill={items.assistPrevent} name='assistPrevent' />
      <Item key={2} fill={items.reset} name='reset' />
      <Item key={3} fill={items.steal} name='steal' />
    </View>
  )
}

import React from 'react'
import { View } from 'react-native'
import Item from '../item'
import styles from './styles'

export default function MidItems (props) {
  const items = props.items || {}
  return (
    <View style={styles.itemContainer}>
      <Item key={1} fill={items.purple} color='purple' />
      <Item key={2} fill={items.brown} color='brown' />
    </View>
  )
}

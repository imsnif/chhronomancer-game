import React from 'react'
import { View } from 'react-native'
import Item from '../item'
import styles from './styles'

export default function MidItems (props) {
  const items = props.items || []
  const lock = items.find(i => i.name === 'lock') || {fill: false, bright: false}
  const unlock = items.find(i => i.name === 'unlock') || {fill: false, bright: false}
  return (
    <View style={styles.itemContainer}>
      <Item
        key={1}
        fill={lock.fill}
        bright={lock.bright}
        name='lock'
        style={styles.itemStyle}
        onPress={lock.onPress}
      />
      <Item
        key={2}
        fill={unlock.fill}
        bright={unlock.bright}
        name='unlock'
        style={styles.itemStyle}
        onPress={unlock.onPress}
      />
    </View>
  )
}

import React from 'react'
import { View } from 'react-native'
import Item from '../item'
import styles from './styles'

export default function LowItems (props) {
  const items = props.items || []
  const assistPrevent = items.find(i => i.name === 'assistPrevent') || {fill: false, bright: false}
  const reset = items.find(i => i.name === 'reset') || {fill: false, bright: false}
  const steal = items.find(i => i.name === 'steal') || {fill: false, bright: false}
  return (
    <View style={styles.itemContainer}>
      <Item key={1} fill={assistPrevent.fill} bright={assistPrevent.bright} name='assistPrevent' />
      <Item key={2} fill={reset.fill} bright={reset.bright} name='reset' />
      <Item key={3} fill={steal.fill} bright={steal.bright} name='steal' />
    </View>
  )
}

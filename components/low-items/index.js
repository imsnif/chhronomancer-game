import React from 'react'
import { View } from 'react-native'
import Item from '../item'
import styles from './styles'

export default function LowItems (props) {
  const items = props.items || []
  const assist = items.find(i => i.name === 'assist') || {fill: false, bright: false}
  const prevent = items.find(i => i.name === 'prevent') || {fill: false, bright: false}
  const reset = items.find(i => i.name === 'reset') || {fill: false, bright: false}
  const steal = items.find(i => i.name === 'steal') || {fill: false, bright: false}
  return (
    <View style={styles.itemContainer}>
      <Item
        key={1}
        fill={assist.fill}
        bright={assist.bright}
        name='assist'
        onPress={assist.onPress}
        style={styles.itemStyle}
      />
      <Item
        key={2}
        fill={prevent.fill}
        bright={prevent.bright}
        name='prevent'
        onPress={prevent.onPress}
        style={styles.itemStyle}
      />
      <Item
        key={3}
        fill={reset.fill}
        bright={reset.bright}
        name='reset'
        onPress={reset.onPress}
        style={styles.itemStyle}
      />
      <Item
        key={4}
        fill={steal.fill}
        bright={steal.bright}
        name='steal'
        onPress={steal.onPress}
        style={styles.itemStyle}
      />
    </View>
  )
}

import React from 'react'
import { View, Text } from 'react-native'
import ListBox from '../list-box'
import Item from '../item'
import styles from './styles'

const itemNames = [
  // TODO: fix this
  'Steal',
  'Assist',
  'Prevent',
  'Reset',
  'Lock',
  'Unlock'
]

export default function ItemList (props) {
  const { itemCount, items } = props
  return (
    <ListBox title='Items' subtitle={`Cap: ${itemCount}/8`}>
      {
        itemNames
        .map((itemName, index) => {
          const item = items.find(i => i.name === itemName.toLowerCase())
          const itemCount = item && item.count ? item.count : 0
          const nameAndCountString = itemCount > 1
            ? `${itemName} (x${itemCount})`
            : itemName
          return (
            <View key={index} style={styles.item}>
              <Item name={itemName.toLowerCase()} fill={!!item} style={styles.itemImageBox} />
              <View style={styles.itemName}>
                <Text style={item && item.source
                  ? styles.boldNameText
                  : styles.nameText
                }>{nameAndCountString}</Text>
                <Text style={styles.details}>?</Text>
              </View>
            </View>
          )
        })
      }
    </ListBox>
  )
}

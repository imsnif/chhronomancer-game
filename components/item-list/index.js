import React from 'react'
import { View, Text, Image } from 'react-native'
import ListBox from '../list-box'
import styles from './styles'

import steal from '../../assets/items/steal-green.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import reset from '../../assets/items/reset-green.png'
import lock from '../../assets/items/padlock-green.png'
import unlock from '../../assets/items/unlock-green.png'

import stealEmpty from '../../assets/items/steal-green-empty.png'
import assistEmpty from '../../assets/items/assist-green-empty.png'
import preventEmpty from '../../assets/items/prevent-green-empty.png'
import resetEmpty from '../../assets/items/reset-green-empty.png'
import lockEmpty from '../../assets/items/padlock-green-empty.png'
import unlockEmpty from '../../assets/items/unlock-green-empty.png'

const images = {
  Steal: steal,
  Assist: assist,
  Prevent: prevent,
  Reset: reset,
  Lock: lock,
  Unlock: unlock
}
const imagesEmpty = {
  Steal: stealEmpty,
  Assist: assistEmpty,
  Prevent: preventEmpty,
  Reset: resetEmpty,
  Lock: lockEmpty,
  Unlock: unlockEmpty
}

const itemNames = [
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
              <Image
                source={item && item.source ? images[itemName] : imagesEmpty[itemName]}
                style={styles.itemImageBox}
              />
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

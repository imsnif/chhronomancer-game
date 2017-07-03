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

const images = {steal, assist, prevent, reset, lock, unlock}
const imagesEmpty = {
  steal: stealEmpty,
  assist: assistEmpty,
  prevent: preventEmpty,
  reset: resetEmpty,
  lock: lockEmpty,
  unlock: unlockEmpty
}

const itemNames = {
  steal: 'Steal',
  assist: 'Assist',
  prevent: 'Prevent',
  reset: 'Reset',
  lock: 'Lock',
  unlock: 'Unlock'
}

export default function ItemList (props) {
  const { itemCount, items } = props
  return (
    <ListBox title='Items' subtitle={`Cap: ${itemCount}/7`}>
      {
        items.map((item, index) => {
          const itemCount = item.count
          const nameAndCountString = itemCount > 1
            ? `${itemNames[item.name]} (x${itemCount})`
            : itemNames[item.name]
          return (
            <View key={index} style={styles.item}>
              <Image
                source={item.source ? images[item.name] : imagesEmpty[item.name]}
                style={styles.itemImageBox}
              />
              <View style={styles.itemName}>
                <Text style={item.source ? styles.boldNameText : styles.nameText}>{nameAndCountString}</Text>
                <Text style={styles.details}>?</Text>
              </View>
            </View>
          )
        })
      }
    </ListBox>
  )
}

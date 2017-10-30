import React from 'react'
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native'
import styles from './styles'

import assistBright from '../../assets/items/assist-green-bright.png'
import preventBright from '../../assets/items/prevent-green-bright.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import lockBright from '../../assets/items/padlock-green-bright.png'
import lock from '../../assets/items/padlock-green.png'
import resetBright from '../../assets/items/reset-green-bright.png'
import reset from '../../assets/items/reset-green.png'
import stealBright from '../../assets/items/steal-green-bright.png'
import steal from '../../assets/items/steal-green.png'
import unlockBright from '../../assets/items/unlock-green-bright.png'
import unlock from '../../assets/items/unlock-green.png'

import commonStyles from '../common/styles'

const brightIcons = {
  assist: assistBright,
  prevent: preventBright,
  reset: resetBright,
  steal: stealBright,
  lock: lockBright,
  unlock: unlockBright
}

export default function Item (props) {
  const icons = {
    assist,
    prevent,
    reset,
    steal,
    lock,
    unlock
  }
  const img = props.bright ? brightIcons[props.name] : icons[props.name]
  if (props.onPress) {
    return (
      <TouchableHighlight
        underlayColor={commonStyles.backGround}
        onPress={props.onPress || function () {}}
      >
        <Image style={StyleSheet.flatten([styles.item, props.style])} source={img}>
          {
            props.fill
              ? null
              : <View style={{backgroundColor: 'green', width: '100%', height: '100%', position: 'absolute', opacity: 0.7}} />
          }
        </Image>
      </TouchableHighlight>
    )
  } else {
    return (
      <Image style={StyleSheet.flatten([styles.item, props.style])} source={img}>
        {
          props.fill
            ? null
            : <View style={styles.emptyItem} />
        }
      </Image>
    )
  }
}

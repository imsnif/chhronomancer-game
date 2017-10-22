import React from 'react'
import { Image, TouchableHighlight, StyleSheet } from 'react-native'
import styles from './styles'

import assistEmpty from '../../assets/items/assist-green-empty.png'
import preventEmpty from '../../assets/items/prevent-green-empty.png'
import assistBright from '../../assets/items/assist-green-bright.png'
import preventBright from '../../assets/items/prevent-green-bright.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import lockEmpty from '../../assets/items/padlock-green-empty.png'
import lockBright from '../../assets/items/padlock-green-bright.png'
import lock from '../../assets/items/padlock-green.png'
import resetEmpty from '../../assets/items/reset-green-empty.png'
import resetBright from '../../assets/items/reset-green-bright.png'
import reset from '../../assets/items/reset-green.png'
import stealEmpty from '../../assets/items/steal-green-empty.png'
import stealBright from '../../assets/items/steal-green-bright.png'
import steal from '../../assets/items/steal-green.png'
import unlockEmpty from '../../assets/items/unlock-green-empty.png'
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
    assist: props.fill ? assist : assistEmpty,
    prevent: props.fill ? prevent : preventEmpty,
    reset: props.fill ? reset : resetEmpty,
    steal: props.fill ? steal : stealEmpty,
    lock: props.fill ? lock : lockEmpty,
    unlock: props.fill ? unlock : unlockEmpty
  }
  const img = props.bright ? brightIcons[props.name] : icons[props.name]
  if (props.onPress) {
    return (
      <TouchableHighlight
        underlayColor={commonStyles.backGround}
        onPress={props.onPress || function () {}}
      >
        <Image style={StyleSheet.flatten([styles.item, props.style])} source={img} />
      </TouchableHighlight>
    )
  } else {
    return (
      <Image style={StyleSheet.flatten([styles.item, props.style])} source={img} />
    )
  }
}

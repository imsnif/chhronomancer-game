import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import styles from './styles'
import assistPreventEmpty from '../../assets/items/assist-prevent-green-empty.png'
import assistPrevent from '../../assets/items/assist-prevent-green.png'
import lockEmpty from '../../assets/items/padlock-green-empty.png'
import lock from '../../assets/items/padlock-green.png'
import resetEmpty from '../../assets/items/reset-green-empty.png'
import reset from '../../assets/items/reset-green.png'
import stealEmpty from '../../assets/items/steal-green-empty.png'
import steal from '../../assets/items/steal-green.png'
import unlockEmpty from '../../assets/items/unlock-green-empty.png'
import unlock from '../../assets/items/unlock-green.png'

export default function Item (props) {
  const icons = {
    red: props.fill ? assistPrevent : assistPreventEmpty,
    green: props.fill ? reset : resetEmpty,
    blue: props.fill ? steal : stealEmpty,
    purple: props.fill ? lock : lockEmpty,
    brown: props.fill ? unlock : unlockEmpty
  }
  const img = icons[props.color]
  return (
    <Image style={styles.item} source={img} />
  )
}

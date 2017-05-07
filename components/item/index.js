import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

import assistPreventEmpty from '../../assets/items/assist-prevent-green-empty.png'
import assistPreventBright from '../../assets/items/assist-prevent-green-bright.png'
import assistPrevent from '../../assets/items/assist-prevent-green.png'
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

export default function Item (props) {
  const icons = {
    assistPrevent: props.fill ? assistPrevent : assistPreventEmpty,
    reset: props.fill ? reset : resetEmpty,
    steal: props.fill ? steal : stealEmpty,
    lock: props.fill ? lock : lockEmpty,
    unlock: props.fill ? unlock : unlockEmpty
  }
  const brightIcons = {
    assistPrevent: assistPreventBright,
    reset: resetBright,
    steal: stealBright,
    lock: lockBright,
    unlock: unlockBright
  }
  const img = props.bright ? brightIcons[props.name] : icons[props.name]
  return (
    <Image style={styles.item} source={img} />
  )
}

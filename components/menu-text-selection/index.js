import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

import commonStyles from '../common/styles'

export default function menuText (props) {
  const onPress = props.onPress || function () {}
  return (
    <TouchableHighlight underlayColor={commonStyles.backGround} onPress={onPress} style={{flex: 1}}>
      <Text style={styles.menuText}>{ props.selected ? `[ ${props.text} ]` : `${props.text}` }</Text>
    </TouchableHighlight>
  )
}

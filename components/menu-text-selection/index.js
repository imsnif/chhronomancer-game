import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import styles from './styles'

import commonStyles from '../common/styles'

export default function menuTextSelection (props) {
  const onPress = props.onPress || function () {}
  return (
    <TouchableHighlight
      underlayColor={commonStyles.backGround}
      onPress={onPress}
      style={{flex: 1}}
    >
      <Text numberOfLines={1} style={StyleSheet.flatten([styles.menuText, props.style])}>
        { props.selected ? `[ ${props.text} ]` : `${props.text}` }
      </Text>
    </TouchableHighlight>
  )
}

import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

import commonStyles from '../common/styles'

export default function Switch (props) {
  return (
    <View style={styles.container}>
      {
        props.options.map((button, index) => {
          const selected = index === props.selected || false
          return (
            <TouchableHighlight
              key={index}
              underlayColor={selected ? commonStyles.foreGround : commonStyles.backGround}
              style={selected ? styles.selected : styles.unSelected}
              onPress={selected ? () => {} : button.action}
            >
              <Text style={selected ? styles.selectedText : styles.unSelectedText}>
                {button.text}
              </Text>
            </TouchableHighlight>
          )
        })
      }
    </View>
  )
}

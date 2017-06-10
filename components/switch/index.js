import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

import timelineStore from '../../stores/timeline'

export default function Switch (props) {
  return (
    <View style={styles.container}>
      {
        props.options.map((button, index) => {
          const selected = index === props.selected || false
          return (
            <TouchableHighlight
              key={index}
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

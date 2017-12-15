import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text } from 'react-native'
import styles from './styles'

import clockStore from '../../stores/clock'

@observer
export default class Spinner extends Component {
  render () {
    const spinnerChar = clockStore.spinnerChar
    return (
      <View style={styles.spinnerContainer}>
        <Text style={styles.spinner}>{spinnerChar}</Text>
      </View>
    )
  }
}

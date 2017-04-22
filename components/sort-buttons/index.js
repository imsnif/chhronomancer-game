import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import styles from './styles'

@observer
export default class SortButtons extends Component {
  render () {
    const timelineStore = this.props.timelineStore
    const { sortBy } = timelineStore
    return (
      <View style={styles.container}>
        <TouchableHighlight style={sortBy === 'player'
          ? styles.selected
          : styles.unSelectedMiddle
        } onPress={() => timelineStore.changeSort('player')}>
          <Text style={sortBy === 'player'
            ? styles.selectedText
            : styles.unSelectedText
          }>Player</Text>
        </TouchableHighlight>
        <TouchableHighlight style={sortBy === 'type'
          ? styles.selected
          : styles.unSelectedMiddle
        } onPress={() => timelineStore.changeSort('type')}>
          <Text style={sortBy === 'type'
            ? styles.selectedText
            : styles.unSelectedText
          }>Type</Text>
        </TouchableHighlight>
        <TouchableHighlight style={sortBy === 'time'
          ? styles.selected
          : styles.unSelected
        } onPress={() => timelineStore.changeSort('time')}>
          <Text style={sortBy === 'time'
            ? styles.selectedText
            : styles.unSelectedText
          }>Time</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

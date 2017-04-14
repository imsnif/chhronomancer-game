import React, { Component } from 'react'
import { ScrollView, View, Button, StyleSheet } from 'react-native'
import { observer } from 'mobx-react/native'
import MenuButton from '../menu-button'
import Player from '../player'
import styles from './styles'

@observer
export default class Timeline extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.playersContainer}>
          <ScrollView style={styles.playersScroller}>
            {
              this.props.timelineStore.players.map(pId => {
                const player = this.props.playersStore.players.find(p => p.id === pId)
                return (
                  <Player
                    clockStore={this.props.clockStore}
                    key={player.id}
                    name={player.name}
                    image={player.image}
                    activePower={player.activePower}
                    items={player.items}
                  />
                )
              })
            }
            <View style={styles.scrollPad}/>
          </ScrollView>
        </View>
        <View style={styles.buttonRow}>
          <MenuButton title='Reset' onPress={() => {}} />
          <MenuButton title='Quest' onPress={() => {}} />
        </View>
        <View style={styles.buttonRow}>
          <MenuButton title='Lock' onPress={() => {}} />
          <MenuButton title='Unlock' onPress={() => {}} />
        </View>
        <View style={styles.buttonRow}>
          <MenuButton title='Travel Here' onPress={() => {}} />
        </View>
      </View>
    )
  }
}

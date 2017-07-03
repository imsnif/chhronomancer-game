import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { observer } from 'mobx-react/native'
import ControlPanel from '../control-panel'
import MenuButton from '../menu-button'
import Player from '../player'
import Switch from '../switch'
import styles from './styles'
import sortPlayers from './sort-players.js'

import powerStore from '../../stores/power'
import timelineStore from '../../stores/timeline'
import playerStore from '../../stores/player'
import clockStore from '../../stores/clock'

@observer
export default class Timeline extends Component {
  render () {
    const name = this.props.name
    const timeline = timelineStore.getTimeline(name)
    const sortBy = timeline.sortBy
    const sortIndex = sortBy === 'player' ? 0 : sortBy === 'type' ? 1 : 2
    const middleButtonRowStyle = StyleSheet.flatten([
      styles.buttonRow,
      {marginTop: 4, marginBottom: 4}
    ])
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView>
            {
              timeline.players
              .sort((player1Id, player2Id) => sortPlayers(
                player1Id,
                player2Id,
                playerStore,
                powerStore,
                clockStore,
                sortBy,
                name
              ))
              .map(pId =>
                <Player
                  key={pId}
                  id={pId}
                  navigator={this.props.navigator}
                  timelineName={this.props.name}
                />
              )
            }
          </ScrollView>
        </View>
        <ControlPanel>
          <View style={styles.buttonPad}>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} style={{marginRight: 2}} title='Reset' onPress={() => {}} />
              <MenuButton fontSize={20} style={{marginLeft: 2}} title='Quest' onPress={() => {}} />
            </View>
            <View style={middleButtonRowStyle}>
              <MenuButton fontSize={20} style={{marginRight: 2}} title='Lock' onPress={() => {}} />
              <MenuButton fontSize={20} style={{marginLeft: 2}} title='Unlock' onPress={() => {}} />
            </View>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Travel Here' onPress={() => {}} />
            </View>
          </View>
          <Switch selected={sortIndex} options={[
            {text: 'player', action: () => timelineStore.changeTimelineSort(name, 'player')},
            {text: 'type', action: () => timelineStore.changeTimelineSort(name, 'type')},
            {text: 'time', action: () => timelineStore.changeTimelineSort(name, 'time')}
          ]} />
        </ControlPanel>
      </View>
    )
  }
}

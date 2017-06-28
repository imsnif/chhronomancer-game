import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { observer } from 'mobx-react/native'
import ControlPanel from '../control-panel'
import SortButtons from '../sort-buttons'
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
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.playersContainer}>
            <ScrollView style={styles.playersScroller}>
              {
                timeline.players
                .sort((a, b) => {
                  const player1 = playerStore.players.find(p => p.id === a)
                  const player2 = playerStore.players.find(p => p.id === b)
                  const activePowers = {
                    player1: Object.assign({}, powerStore.getPower(player1.id, name), {
                      timeLeft: powerStore.getTimeLeft(player1.id, name, clockStore.time)
                    }),
                    player2: Object.assign({}, powerStore.getPower(player2.id, name), {
                      timeLeft: powerStore.getTimeLeft(player2.id, name, clockStore.time)
                    })
                  }
                  return sortPlayers(player1, player2, activePowers, sortBy)
                })
                .map(pId => <Player key={pId} id={pId} navigator={this.props.navigator} timelineName={this.props.name} />)
              }
              <View style={styles.scrollPad} />
            </ScrollView>
          </View>
        </View>
        <ControlPanel>
          <View style={styles.buttonPad}>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Reset' onPress={() => {}} />
              <MenuButton fontSize={20} title='Quest' onPress={() => {}} />
            </View>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Lock' onPress={() => {}} />
              <MenuButton fontSize={20} title='Unlock' onPress={() => {}} />
            </View>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Travel Here' onPress={() => {}} />
            </View>
          </View>
          <View style={{flex: 1, paddingTop: 2, paddingBottom: 2}}>
            <Switch selected={sortIndex} options={[
              {text: 'player', action: () => timelineStore.changeTimelineSort(name, 'player')},
              {text: 'type', action: () => timelineStore.changeTimelineSort(name, 'type')},
              {text: 'time', action: () => timelineStore.changeTimelineSort(name, 'time')},
            ]} />
          </View>
        </ControlPanel>
      </View>
    )
  }
}

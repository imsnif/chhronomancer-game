import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { observer } from 'mobx-react/native'
import ControlPanel from '../control-panel'
import MenuButton from '../menu-button'
import Player from '../player'
import Switch from '../switch'
import Item from '../item'
import StealModal from '../steal-modal'
import CombineModal from '../combine-modal'
import styles from './styles'
import sortPlayers from './sort-players.js'

import timelineStore from '../../stores/timeline'
import statsStore from '../../stores/stats'
import playerStore from '../../stores/player'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

@observer
export default class Timeline extends Component {
  render () {
    const { name } = this.props
    const timeline = timelineStore.getTimeline(name)
    const { sortBy } = timeline
    const sortIndex = sortBy === 'player' ? 0 : sortBy === 'type' ? 1 : 2
    const playerInTimeline = timeline.players.includes(statsStore.playerId)
    // TODO: move button validation logic elsewhere
    return (
      <View style={styles.container}>
        <StealModal timelineName={name} />
        <CombineModal timelineName={name} />
        <View style={styles.titleItem}>
          <Item name={timeline.type} fill style={styles.timelineItemType} />
          <Text style={styles.titleText}>{timeline.name}{timeline.isLocked ? ' (LOCKED)' : null}</Text>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            {
              timeline.players
              .sort((p1Id, p2Id) => sortPlayers(p1Id, p2Id, name))
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
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.leftButton}
                title='Reset'
                onPress={() => timelineStore.resetTimeline(name)}
                disabled={!playerInTimeline || !playerStore.hasItem(statsStore.playerId, 'reset').get()}
              />
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.rightButton}
                title='Quest'
                onPress={() => timelineStore.quest(name)}
                disabled={!playerInTimeline}
              />
            </View>
            <View style={styles.middleButtonRow}>
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.leftButton}
                title='Lock'
                onPress={() => timelineStore.lockTimeline(name)}
                disabled={!playerInTimeline || !playerStore.hasItem(statsStore.playerId, 'lock').get() || timeline.isLocked}
              />
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.rightButton}
                title='Unlock'
                onPress={() => timelineStore.unlockTimeline(name)}
                disabled={!playerInTimeline || !playerStore.hasItem(statsStore.playerId, 'unlock').get() || !timeline.isLocked}
              />
            </View>
            <View style={styles.middleButtonRow}>
              <MenuButton fontSize={responsiveFontSize(3)} title='Combine Items' syncAction onPress={() => timelineStore.addModal(name, {modalType: 'combine'})} />
            </View>
            <View style={styles.middleButtonRow}>
              <MenuButton
                fontSize={responsiveFontSize(3)}
                title='Travel Here'
                onPress={() => timelineStore.joinTimeline(name)}
                disabled={playerInTimeline || timeline.isLocked}
              />
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

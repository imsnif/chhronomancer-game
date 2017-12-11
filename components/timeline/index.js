import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react/native'
import ControlPanel from '../control-panel'
import MenuButton from '../menu-button'
import PlayersInTimeline from '../players-in-timeline'
import Switch from '../switch'
import Item from '../item'
import StealModal from '../steal-modal'
import CombineModal from '../combine-modal'
import styles from './styles'

import timelineStore from '../../stores/timeline'
import statsStore from '../../stores/stats'
import playerStore from '../../stores/player'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

@observer
export default class Timeline extends Component {
  constructor (props) {
    super(props)
    this._resetTimeline = this._resetTimeline.bind(this)
    this._quest = this._quest.bind(this)
    this._lockTimeline = this._lockTimeline.bind(this)
    this._unlockTimeline = this._unlockTimeline.bind(this)
    this._joinTimeline = this._joinTimeline.bind(this)
    this._popCombineModal = this._popCombineModal.bind(this)
    this._changeSortToPlayer = this._changeSortToPlayer.bind(this)
    this._changeSortToType = this._changeSortToType.bind(this)
    this._changeSortToTime = this._changeSortToTime.bind(this)
  }
  _resetTimeline () {
    timelineStore.resetTimeline(this.props.name)
  }
  _quest () {
    timelineStore.quest(this.props.name)
  }
  _lockTimeline () {
    timelineStore.lockTimeline(this.props.name)
  }
  _unlockTimeline () {
    timelineStore.unlockTimeline(this.props.name)
  }
  _joinTimeline () {
    timelineStore.joinTimeline(this.props.name)
  }
  _popCombineModal () {
    timelineStore.addModal(this.props.name, {modalType: 'combine'})
  }
  _changeSortToPlayer () {
    timelineStore.changeTimelineSort(this.props.name, 'player')
  }
  _changeSortToType () {
    timelineStore.changeTimelineSort(this.props.name, 'type')
  }
  _changeSortToTime () {
    timelineStore.changeTimelineSort(this.props.name, 'time')
  }
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
        <PlayersInTimeline name={name} />
        <ControlPanel>
          <View style={styles.buttonPad}>
            <View style={styles.buttonRow}>
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.leftButton}
                title='Reset'
                onPress={this._resetTimeline}
                disabled={!playerInTimeline || !playerStore.hasItem(statsStore.playerId, 'reset').get()}
              />
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.rightButton}
                title='Quest'
                onPress={this._quest}
                disabled={!playerInTimeline}
              />
            </View>
            <View style={styles.middleButtonRow}>
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.leftButton}
                title='Lock'
                onPress={this._lockTimeline}
                disabled={!playerInTimeline || !playerStore.hasItem(statsStore.playerId, 'lock').get() || timeline.isLocked}
              />
              <MenuButton
                fontSize={responsiveFontSize(3)}
                style={styles.rightButton}
                title='Unlock'
                onPress={this._unlockTimeline}
                disabled={!playerInTimeline || !playerStore.hasItem(statsStore.playerId, 'unlock').get() || !timeline.isLocked}
              />
            </View>
            <View style={styles.middleButtonRow}>
              <MenuButton fontSize={responsiveFontSize(3)} title='Combine Items' syncAction onPress={this._popCombineModal} />
            </View>
            <View style={styles.middleButtonRow}>
              <MenuButton
                fontSize={responsiveFontSize(3)}
                title='Travel Here'
                onPress={this._joinTimeline}
                disabled={playerInTimeline || timeline.isLocked}
              />
            </View>
          </View>
          <Switch selected={sortIndex} options={[
            {text: 'player', action: this._changeSortToPlayer},
            {text: 'type', action: this._changeSortToType},
            {text: 'time', action: this._changeSortToTime}
          ]} />
        </ControlPanel>
      </View>
    )
  }
}

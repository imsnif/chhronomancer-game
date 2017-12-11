import React, { Component } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react/native'
import MenuButton from '../menu-button'
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
  render () {
    const { name } = this.props
    const timeline = timelineStore.getTimeline(name)
    const playerInTimeline = timeline.players.includes(statsStore.playerId)
    return (
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
    )
  }
}

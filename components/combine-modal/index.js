import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modalbox'
import { observer } from 'mobx-react/native'
import Item from '../item'
import MenuButton from '../menu-button'
import HorizontalSeparator from '../horizontal-separator'
import styles from './styles'

import {
  responsiveFontSize
} from 'react-native-responsive-dimensions'

import timelineStore from '../../stores/timeline'
import statsStore from '../../stores/stats'
import playerStore from '../../stores/player'

@observer
export default class CombineModal extends Component {
  constructor (props) {
    super(props)
    this._combineItems = this._combineItems.bind(this)
    this._hasItem = this._hasItem.bind(this)
    this._combineAssistPrevent = this._combineAssistPrevent.bind(this)
    this._combineStealReset = this._combineStealReset.bind(this)
    this._combineLockUnlock = this._combineLockUnlock.bind(this)
  }
  _combineItems (item1, item2) {
    const { timelineName } = this.props
    timelineStore.combineItems(item1, item2, timelineName)
    timelineStore.clearAllModals()
  }
  _combineAssistPrevent () {
    this._combineItems('assist', 'prevent')
  }
  _combineStealReset () {
    this._combineItems('steal', 'reset')
  }
  _combineLockUnlock () {
    this._combine('lock', 'unlock')
  }
  _hasItem (item) {
    const player = playerStore.getPlayer(statsStore.playerId)
    return player.items.map(i => i.name).includes(item)
  }
  _clearModal () {
    timelineStore.clearAllModals()
  }
  render () {
    const timelineName = this.props.timelineName
    const modal = timelineStore.modals.get(timelineName)
    return (
      <Modal
        onClosed={this._clearModal}
        animationDuration={0}
        isOpen={!!(modal && modal.modalType === 'combine')}
        style={styles.modal}
        width={300}
        animated={false}
        transparent
      >
        <View style={{flexDirection: 'row'}}>
          <View style={styles.contentContainer}>
            <HorizontalSeparator length={48} style={styles.topBorder} />
            <TouchableHighlight onPress={this._combineAssistPrevent} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='assist' fill={this._hasItem('assist')} style={styles.item} />
                <Text style={styles.text}>+</Text>
                <Item name='prevent' fill={this._hasItem('prevent')} style={styles.item} />
                <Text style={styles.text}>=</Text>
                <Item name='lock' fill={this._hasItem('lock')} style={styles.item} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._combineStealReset} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='reset' fill={this._hasItem('reset')} style={styles.item} />
                <Text style={styles.text}>+</Text>
                <Item name='steal' fill={this._hasItem('steal')} style={styles.item} />
                <Text style={styles.text}>=</Text>
                <Item name='unlock' fill={this._hasItem('unlock')} style={styles.item} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._combineLockUnlock} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='lock' fill={this._hasItem('lock')} style={styles.item} />
                <Text style={styles.text}>+</Text>
                <Item name='unlock' fill={this._hasItem('unlock')} style={styles.item} />
                <Text style={styles.text}>=</Text>
                <Text style={styles.winText}>WIN</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.cancelContainer}>
              <MenuButton title='Cancel' onPress={this._clearModal} fontSize={responsiveFontSize(4)} />
            </View>
            <HorizontalSeparator style={styles.topBorder} />
          </View>
        </View>
      </Modal>
    )
  }
}

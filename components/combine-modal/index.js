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

function combineItems (item1, item2, timelineName) {
  timelineStore.combineItems(item1, item2, timelineName)
  timelineStore.clearAllModals()
}

@observer
export default class CombineModal extends Component {
  render () {
    const player = playerStore.getPlayer(statsStore.playerId)
    const timelineName = this.props.timelineName
    const modal = timelineStore.modals.get(timelineName)
    return (
      <Modal
        onClosed={() => timelineStore.clearAllModals()}
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
            <TouchableHighlight onPress={() => combineItems('assist', 'prevent', timelineName)} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='assist' fill={player.items.map(i => i.name).includes('assist')} style={styles.item} />
                <Text style={styles.text}>+</Text>
                <Item name='prevent' fill={player.items.map(i => i.name).includes('prevent')} style={styles.item} />
                <Text style={styles.text}>=</Text>
                <Item name='lock' fill={player.items.map(i => i.name).includes('lock')} style={styles.item} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => combineItems('steal', 'reset', timelineName)} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='reset' fill={player.items.map(i => i.name).includes('reset')} style={styles.item} />
                <Text style={styles.text}>+</Text>
                <Item name='steal' fill={player.items.map(i => i.name).includes('steal')} style={styles.item} />
                <Text style={styles.text}>=</Text>
                <Item name='unlock' fill={player.items.map(i => i.name).includes('unlock')} style={styles.item} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => combineItems('lock', 'unlock', timelineName)} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='lock' fill={player.items.map(i => i.name).includes('lock')} style={styles.item} />
                <Text style={styles.text}>+</Text>
                <Item name='unlock' fill={player.items.map(i => i.name).includes('unlock')} style={styles.item} />
                <Text style={styles.text}>=</Text>
                <Text style={styles.winText}>WIN</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.cancelContainer}>
              <MenuButton title='Cancel' onPress={() => timelineStore.clearAllModals()} fontSize={responsiveFontSize(4)} />
            </View>
            <HorizontalSeparator style={styles.topBorder} />
          </View>
        </View>
      </Modal>
    )
  }
}

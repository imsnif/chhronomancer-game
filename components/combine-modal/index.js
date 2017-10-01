import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modalbox'
import { observer } from 'mobx-react/native'
import Item from '../item'
import MenuButton from '../menu-button'
import HorizontalSeparator from '../horizontal-separator'
import VerticalSeparator from '../vertical-separator'
import styles from './styles'

import timelineStore from '../../stores/timeline'
import statsStore from '../../stores/stats'
import playerStore from '../../stores/player'

function combineItems (item1, item2, timelineName) {
  timelineStore.combineItems(item1, item2, timelineName)
  timelineStore.clearAllModals()
}

// TODO: create a modal-container component

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
        <HorizontalSeparator length={48} style={styles.topBorder} />
        <View style={{flexDirection: 'row'}}>
          <VerticalSeparator length={12} style={styles.verticalLine} />
          <View style={styles.contentContainer}>
            <TouchableHighlight onPress={() => combineItems('assist', 'prevent', timelineName)} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='assist' fill={player.items.map(i => i.name).includes('assist')} />
                <Text style={styles.text}>+</Text>
                <Item name='prevent' fill={player.items.map(i => i.name).includes('prevent')} />
                <Text style={styles.text}>=</Text>
                <Item name='lock' fill={player.items.map(i => i.name).includes('lock')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => combineItems('steal', 'reset', timelineName)} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='reset' fill={player.items.map(i => i.name).includes('reset')} />
                <Text style={styles.text}>+</Text>
                <Item name='steal' fill={player.items.map(i => i.name).includes('steal')} />
                <Text style={styles.text}>=</Text>
                <Item name='unlock' fill={player.items.map(i => i.name).includes('unlock')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => combineItems('lock', 'unlock', timelineName)} style={{flex: 1}}>
              <View style={styles.rowContainer}>
                <Item name='lock' fill={player.items.map(i => i.name).includes('lock')} />
                <Text style={styles.text}>+</Text>
                <Item name='unlock' fill={player.items.map(i => i.name).includes('unlock')} />
                <Text style={styles.text}>=</Text>
                <Text style={styles.winText}>WIN</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.rowContainer}>
              <MenuButton title='Cancel' onPress={() => timelineStore.clearAllModals()} />
            </View>
          </View>
          <VerticalSeparator length={12} style={styles.verticalLine} />
        </View>
        <HorizontalSeparator length={48} style={styles.topBorder} />
      </Modal>
    )
  }
}

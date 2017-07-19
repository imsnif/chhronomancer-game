import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modalbox'
import { observer } from 'mobx-react/native'
import Item from '../item'
import MenuButton from '../menu-button'
import styles from './styles'

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
        isOpen={modal && modal.modalType === 'combine' ? true : false}
        style={styles.modal}
        width={300}
        animated={false}
        transparent={true}
      >
        <Text style={styles.topBorder}>+------------------------------------------------+</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.verticalLine}>{' |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n'}</Text>
          <View style={{flexDirection: 'column', flex: 0, width: 272}}>
            <TouchableHighlight onPress={() => combineItems('assist', 'prevent', timelineName)} style={{flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Item name='assist' fill={player.items.map(i => i.name).includes('assist')} />
                <Text style={{flex: 1, color: 'green', maxWidth: 10}}>+</Text>
                <Item name='prevent' fill={player.items.map(i => i.name).includes('prevent')} />
                <Text style={{flex: 1, color: 'green', maxWidth: 10}}>=</Text>
                <Item name='lock' fill={player.items.map(i => i.name).includes('lock')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => combineItems('steal', 'reset', timelineName)} style={{flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Item name='reset' fill={player.items.map(i => i.name).includes('reset')} />
                <Text style={{flex: 1, color: 'green', maxWidth: 10}}>+</Text>
                <Item name='steal' fill={player.items.map(i => i.name).includes('steal')} />
                <Text style={{flex: 1, color: 'green', maxWidth: 10}}>=</Text>
                <Item name='unlock' fill={player.items.map(i => i.name).includes('unlock')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => combineItems('lock', 'unlock', timelineName)} style={{flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Item name='lock' fill={player.items.map(i => i.name).includes('lock')} />
                <Text style={{flex: 1, color: 'green', maxWidth: 10}}>+</Text>
                <Item name='unlock' fill={player.items.map(i => i.name).includes('unlock')} />
                <Text style={{flex: 1, color: 'green', maxWidth: 10}}>=</Text>
                <Text style={{flex: 1, color: 'green', minWidth: 10, marginLeft: 3, marginTop: 5, maxWidth: 10, fontSize: 5, fontFamily: 'telegrama_raw'}}>WIN</Text>
              </View>
            </TouchableHighlight>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <MenuButton title='Cancel' onPress={() => timelineStore.clearAllModals()} />
            </View>
          </View>
          <Text style={styles.verticalLine}>{' |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n'}</Text>
        </View>
        <Text style={styles.topBorder}>+------------------------------------------------+</Text>
      </Modal>
    )
  }
}

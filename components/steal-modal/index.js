import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modalbox'
import { observer } from 'mobx-react/native'
import Item from '../item'
import MenuButton from '../menu-button'
import styles from './styles'

import timelineStore from '../../stores/timeline'

function stealItem (modal) {
  timelineStore.stealItem(modal.itemName, modal.playerName)
  timelineStore.clearAllModals()
}

@observer
export default class Timeline extends Component {
  render () {
    const timelineName = this.props.timelineName
    const modal = this.props.modal
    return (
      <Modal
        onClosed={() => timelineStore.clearAllModals()}
        animationDuration={0}
        isOpen={modal ? true : false}
        style={styles.modal}
        width={300}
        animated={false}
        transparent={true}
      >
        <Text style={styles.topBorder}>+------------------------------------------------+</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.verticalLine}>{' |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n'}</Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.text, {flex: 1}]}>Would you like to steal</Text>
            <View style={{flex: 1, marginTop: 5, alignSelf: 'center'}}>
              <Item name={modal ? modal.itemName : null} fill/>
            </View>
            <Text style={[styles.text, {flex: 1}]}>from</Text>
            <Text style={[styles.text, {flex: 1}]}>{modal ? modal.playerName : null}?</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, marginRight: 2}}>
                <MenuButton title='Yes' onPress={() => stealItem(modal)} />
              </View>
              <View style={{flex: 1, marginLeft: 2}}>
                <MenuButton title='No' onPress={() => timelineStore.clearAllModals()} />
              </View>
            </View>
          </View>
          <Text style={styles.verticalLine}>{' |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n |\n'}</Text>
        </View>
        <Text style={styles.topBorder}>+------------------------------------------------+</Text>
      </Modal>
    )
  }
}

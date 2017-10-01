import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modalbox'
import { observer } from 'mobx-react/native'
import Item from '../item'
import HorizontalSeparator from '../horizontal-separator'
import VerticalSeparator from '../vertical-separator'
import MenuButton from '../menu-button'
import styles from './styles'

import timelineStore from '../../stores/timeline'

function stealItem (modal, timelineName) {
  timelineStore.stealItem(modal.itemName, modal.playerName, timelineName)
  timelineStore.clearAllModals()
}

@observer
export default class StealModal extends Component {
  render () {
    const timelineName = this.props.timelineName
    const modal = timelineStore.modals.get(timelineName)
    return (
      <Modal
        onClosed={() => timelineStore.clearAllModals()}
        animationDuration={0}
        isOpen={!!(modal && modal.modalType === 'steal')}
        style={styles.modal}
        width={300}
        animated={false}
        transparent
      >
        <HorizontalSeparator length={48} style={styles.topBorder} />
        <View style={{flexDirection: 'row'}}>
          <VerticalSeparator length={12} style={styles.verticalLine} />
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.text, {flex: 1}]}>Would you like to steal</Text>
            <View style={styles.itemContainer}>
              <Item name={modal ? modal.itemName : null} fill />
            </View>
            <Text style={[styles.text, {flex: 1}]}>from</Text>
            <Text numberOfLines={1} style={[styles.text, {flex: 1}]}>{modal ? modal.playerName : null}?</Text>
            <View style={styles.buttonRow}>
              <View style={styles.buttonLeft}>
                <MenuButton title='Yes' onPress={() => stealItem(modal, timelineName)} />
              </View>
              <View style={styles.buttonRight}>
                <MenuButton title='No' onPress={() => timelineStore.clearAllModals()} />
              </View>
            </View>
          </View>
          <VerticalSeparator length={12} style={styles.verticalLine} />
        </View>
        <HorizontalSeparator length={48} style={styles.topBorder} />
      </Modal>
    )
  }
}

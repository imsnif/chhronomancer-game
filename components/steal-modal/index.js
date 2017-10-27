import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modalbox'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { observer } from 'mobx-react/native'
import Item from '../item'
import HorizontalSeparator from '../horizontal-separator'
import MenuButton from '../menu-button'
import styles from './styles'

import timelineStore from '../../stores/timeline'

function stealItem (modal, timelineName) {
  timelineStore.stealItem(modal.itemName, modal.playerName, timelineName)
  timelineStore.clearAllModals()
}

const buttonFontSize = responsiveFontSize(3)

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
        animated={false}
        transparent
      >
        <HorizontalSeparator style={styles.topBorder} />
        <View style={styles.contentContainer}>
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.text, {flex: 1}]}>Would you like to steal</Text>
            <View style={styles.itemContainer}>
              <Item name={modal ? modal.itemName : null} style={styles.item} fill />
            </View>
            <Text style={[styles.text, {flex: 1}]}>from</Text>
            <Text numberOfLines={1} style={[styles.text, {flex: 1}]}>{modal ? modal.playerName : null}?</Text>
            <View style={styles.buttonRow}>
              <View style={styles.buttonLeft}>
                <MenuButton
                  title='Yes'
                  onPress={() => stealItem(modal, timelineName)}
                  fontSize={buttonFontSize}
                />
              </View>
              <View style={styles.buttonRight}>
                <MenuButton
                  title='No'
                  onPress={() => timelineStore.clearAllModals()}
                  fontSize={buttonFontSize}
                />
              </View>
            </View>
          </View>
        </View>
        <HorizontalSeparator style={styles.topBorder} />
      </Modal>
    )
  }
}

import React, { Component } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { observer } from 'mobx-react/native'
import InfoBox from '../info-box'
import LowItems from '../low-items'
import MidItems from '../mid-items'
import InventoryCount from '../inventory-count'
import Power from '../power'

import playerStore from '../../stores/player'
import powerStore from '../../stores/power'
import timelineStore from '../../stores/timeline'

import commonStyles from '../common/styles'
import styles from './styles'

@observer
export default class Player extends Component {
  constructor (props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  navigate (playerId, timelineName) {
    this.props.navigator.push({
      screenName: 'Bidding',
      playerId,
      timelineName
    })
  }
  render () {
    const timelineName = this.props.timelineName
    const player = playerStore.getPlayer(this.props.id)
    const lowItems = player.items
    .filter(item => ( // TODO: move this logic to a separate function
      item.name === 'assist' ||
      item.name === 'prevent' ||
      item.name === 'reset' ||
      item.name === 'steal')
    )
    .map(item => ({
      name: item.name,
      fill: true,
      bright: item.source === timelineName,
      onPress: () => timelineStore.addModal(timelineName, {modalType: 'steal', itemName: item.name, playerName: player.name})
    }))
    const midItems = player.items
    .filter(item => ( // TODO: move this logic to a separate function
      item.name === 'lock' ||
      item.name === 'unlock')
    )
    .map(item => ({
      name: item.name,
      fill: true,
      bright: item.source === timelineName,
      onPress: () => timelineStore.addModal(timelineName, {modalType: 'steal', itemName: item.name, playerName: player.name})
    }))
    const activePower = powerStore.getPower(player.id, timelineName)
    const count = new Set(player.items.map(i => i.name)).size
    return (
      <TouchableHighlight
        underlayColor={commonStyles.backGround}
        onPress={activePower ? () => this.navigate(player.id, timelineName) : () => {}}
      >
        <InfoBox title={player.name} image={{type: 'player', uri: player.picture}}>
          <View style={styles.powerPad}>
            {
              activePower
                ? <Power
                  name={activePower.name}
                  progress={powerStore.getProgress(player.id, timelineName).get()}
                  timeLeft={powerStore.getTimeLeft(player.id, timelineName).get()}
                  alliedPlayers={activePower.alliedPlayers}
                  enemyPlayers={activePower.enemyPlayers}
                  />
                : <View style={styles.emptyPower} />
            }
          </View>
          <View style={styles.lowerBar}>
            <LowItems items={lowItems} />
            <MidItems items={midItems} />
            <InventoryCount count={count} />
          </View>
        </InfoBox>
      </TouchableHighlight>
    )
  }
}

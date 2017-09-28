import React, { Component } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { observer } from 'mobx-react/native'
import ListBox from '../list-box'
import LowItems from '../low-items'
import MidItems from '../mid-items'
import InventoryCount from '../inventory-count'
import Power from '../power'

import playerStore from '../../stores/player'
import powerStore from '../../stores/power'

import commonStyles from '../common/styles'
import styles from './styles'

import formatItems from './format-items'

const lowItemNames = [ 'assist', 'prevent', 'reset', 'steal' ]
const midItemNames = [ 'lock', 'unlock' ]

@observer
export default class Player extends Component {
  // TODO: CONTINUE HERE! TEST THIS, then all child components, then go back to Timeline
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
    const lowItems = formatItems(player.items, lowItemNames, timelineName, player.name)
    const midItems = formatItems(player.items, midItemNames, timelineName, player.name)
    const activePower = powerStore.getPower(player.id, timelineName)
    const count = player.items.length
    return (
      <TouchableHighlight
        underlayColor={commonStyles.backGround}
        onPress={activePower
          ? () => this.navigate(player.id, timelineName)
          : () => {}
        }
      >
        <ListBox
          style={styles.box}
          title={player.name}
          image={{type: 'player', uri: player.picture}}
        >
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
        </ListBox>
      </TouchableHighlight>
    )
  }
}

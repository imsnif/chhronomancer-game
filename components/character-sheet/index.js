import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'
import ItemList from '../item-list'
import PlayerIterations from '../player-iterations'
import styles from './styles'

import playerStore from '../../stores/player'
import statsStore from '../../stores/stats'

function uniqueItemsWithCount (items) {
  return items.reduce((memo, item) => {
    const existingItem = memo.find(i => i.name === item.name)
    if (!existingItem) {
      memo.push(Object.assign({}, item, {count: 1}))
    } else {
      existingItem.count += 1
    }
    return memo
  }, [])
}

@observer
export default class CharacterSheet extends Component {
  render () {
    const playerId = statsStore.playerId
    const player = playerStore.getPlayer(playerId)
    if (!player) return null
    const actions = player.actions
    const items = uniqueItemsWithCount(player.items)
    const itemCount = player.items.filter(i => i.source).length
    const profilePic = player.picture
    return (
      <View style={styles.container}>
        <View style={styles.titleItem}>
          <Image style={styles.playerImageBox} source={{uri: profilePic}}>
            <View style={styles.imageOverlay} />
          </Image>
          <Text style={styles.titleTextImage}>{player.name}</Text>
        </View>
        <View style={styles.titleItem}>
          <Text style={styles.titleTextSmall}>Actions:</Text>
          <Text style={styles.titleTextSmall}>{actions}</Text>
        </View>
        <View style={styles.summaryBox}>
          <View style={styles.boxContainerTop}>
            <ItemList itemCount={itemCount} items={items} />
          </View>
          <View style={styles.boxContainerBottom}>
            <PlayerIterations playerId={playerId} navigator={this.props.navigator} />
          </View>
        </View>
      </View>
    )
  }
}

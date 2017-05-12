import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'
import ListBox from '../list-box'
import styles from './styles'

import playerStore from '../../stores/player'

import steal from '../../assets/items/steal-green.png'
import assistPrevent from '../../assets/items/assist-prevent-green.png'
import reset from '../../assets/items/reset-green.png'

const images = {steal, assistPrevent, reset}

@observer
export default class CharacterSheet extends Component {
  render () {
    const playerId = this.props.playerId
    const player = playerStore.getPlayer(playerId)
    return (
      <View style={styles.container}>
        <View style={styles.titleItem}>
          <Image style={styles.imageBox} source={player.image} />
          <Text style={styles.playerName}>{player.name}</Text>
        </View>
        <View style={styles.titleItem}>
          <Text style={styles.titleTextStats}>Actions:</Text>
          <Text style={styles.titleTextStats}>13</Text>
        </View>
        <View style={styles.summaryBox}>
          <View style={styles.boxWithGap}>
            <ListBox title='Items' />
          </View>
          <View style={{flex: 1}}>
            <ListBox title='Presence' />
          </View>
        </View>
      </View>
    )
  }
}

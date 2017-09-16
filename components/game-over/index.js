import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'

import HorizontalSeparator from '../horizontal-separator'
import VerticalSeparator from '../vertical-separator'
import styles from './styles'

import playerStore from '../../stores/player'
import statsStore from '../../stores/stats'

@observer
export default class GameOver extends Component {
  componentDidUpdate () {
    if (!statsStore.winnerId) {
      this.props.navigator.push({ screenName: 'character-sheet' })
    }
  }
  render () {
    if (!statsStore.winnerId) {
      return null
    }
    const winnerId = statsStore.winnerId
    const winner = playerStore.getPlayer(winnerId)
    return (
      // TODO: refactor
      <View style={styles.container}>
        <HorizontalSeparator length={54} style={{paddingLeft: 15, paddingRight: 15}} />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <VerticalSeparator length={41} />
          <View style={styles.innerContainer}>
            <Text style={styles.text}>GAME OVER</Text>
            <Text style={styles.text}>Winner: {winner.name}</Text>
            <Image style={styles.playerImageBox} source={{uri: winner.picture}}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'green', opacity: 0.5}} />
            </Image>
          </View>
          <VerticalSeparator length={41} />
        </View>
        <HorizontalSeparator length={54} style={{paddingLeft: 15, paddingRight: 15}} />
      </View>
    )
  }
}

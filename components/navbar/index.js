import React, { Component } from 'react'
import { View, Text, BackAndroid } from 'react-native'
import { observer } from 'mobx-react/native'

import playersStore from '../../stores/player'
import timelineStore from '../../stores/timeline'
import statsStore from '../../stores/stats'

import GameOver from '../game-over'
import MenuTextSelection from '../menu-text-selection'
import HorizontalSeparator from '../horizontal-separator'

import styles from './styles'

function goBack (navigator) {
  return () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    }
    return false
  }
}

@observer
export default class NavBar extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', goBack(this.props.navigator))
  }
  navigate (screenName) {
    this.props.navigator.push({screenName})
    timelineStore.clearAllModals()
  }
  render () {
    if (statsStore.winnerId) return (<GameOver navigator={this.props.navigator} />)
    const screens = this.props.navigator.getCurrentRoutes()
    const { screenName } = screens[screens.length - 1]
    const { playerId } = statsStore
    const player = playersStore.getPlayer(playerId)
    const actions = player ? player.actions : 'N/A'
    return (
      <View style={styles.wholeScreen}>
        <View style={styles.topBar}>
          <Text style={styles.actionBar}>Actions: {actions}</Text>
          <View style={styles.navigationMenu}>
            <MenuTextSelection
              selected={screenName === 'character-sheet'}
              text='Character'
              onPress={() => this.navigate('character-sheet')}
            />
            <MenuTextSelection
              selected={screenName === 'timeline-grid'}
              text='Timelines'
              onPress={() => this.navigate('timeline-grid')}
            />
          </View>
          <HorizontalSeparator length={56} />
        </View>
        <View style={{flex: 2}}>
          {this.props.children}
        </View>
      </View>
    )
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', goBack(this.props.navigator))
  }
}

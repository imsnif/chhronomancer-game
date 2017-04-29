import React, { Component } from 'react'
import { ScrollView, View, BackAndroid } from 'react-native'
import { observer } from 'mobx-react/native'
import SortButtons from '../sort-buttons'
import MenuButton from '../menu-button'
import Player from '../player'
import styles from './styles'
import sortPlayers from './sort-players.js'

import powerStore from '../../stores/power'

@observer
export default class Timeline extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop()
        return true
      }
      return false
    })
  }
  render () {
    const name = this.props.name
    const timeline = this.props.timelineStore.getTimeline(name)
    const sortBy = timeline.sortBy
    return (
      <View style={styles.container}>
        <View style={styles.playersContainer}>
          <ScrollView style={styles.playersScroller}>
            {
              timeline.players
              .sort((a, b) => {
                const player1 = this.props.playersStore.players.find(p => p.id === a)
                const player2 = this.props.playersStore.players.find(p => p.id === b)
                const activePowers = {
                  player1: powerStore.getPower(player1, name),
                  player2: powerStore.getPower(player2, name)
                }
                return sortPlayers(player1, player2, activePowers, sortBy)
              })
              .map(pId => <Player key={pId} id={pId} navigator={this.props.navigator} timelineName={this.props.name} />)
            }
            <View style={styles.scrollPad} />
          </ScrollView>
        </View>
        <View style={styles.separatingLine} />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.buttonPad}>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Reset' onPress={() => {}} />
              <MenuButton fontSize={20} title='Quest' onPress={() => {}} />
            </View>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Lock' onPress={() => {}} />
              <MenuButton fontSize={20} title='Unlock' onPress={() => {}} />
            </View>
            <View style={styles.buttonRow}>
              <MenuButton fontSize={20} title='Travel Here' onPress={() => {}} />
            </View>
          </View>
          <View style={styles.verticalLine} />
          <View style={{padding: 15, flex: 1}}>
            <SortButtons timelineStore={this.props.timelineStore} timelineName={name} />
          </View>
        </View>
      </View>
    )
  }
  componentWillUnmount () {
    // TODO: move this to a separate navigator component
    BackAndroid.removeEventListener('hardwareBackPress', () => {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop()
        return true
      }
      return false
    })
  }
}

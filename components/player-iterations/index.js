import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, ScrollView, Text, TouchableHighlight } from 'react-native'
import ListBox from '../list-box'
import Power from '../power'
import styles from './styles'

import powerStore from '../../stores/power'

@observer
export default class PlayerIterations extends Component {
  navigate (playerId, timelineName) {
    this.props.navigator.push({
      screenName: 'Bidding',
      playerId,
      timelineName
    })
  }
  render () {
    const { playerId } = this.props
    const playerPowers = powerStore.getPlayerPowers(playerId)
    return (
      <ListBox title='Iterations'>
        <ScrollView>
          {
            playerPowers.map((power, index) => {
              const timelineName = power.timelineName
              const progress = powerStore.getProgress(playerId, timelineName)
              const timeLeft = powerStore.getTimeLeft(playerId, timelineName)
              return (
                <TouchableHighlight key={index} onPress={() => this.navigate(playerId, timelineName)}>
                  <View style={styles.iterationItem}>
                    <Text style={styles.timelineName}>{timelineName}</Text>
                    <View style={{flex: 1}}>
                      <Power
                        name={power.name}
                        progress={progress.get()}
                        timeLeft={timeLeft.get()}
                        alliedPlayers={power.alliedPlayers}
                        enemyPlayers={power.enemyPlayers}
                      />
                    </View>
                  </View>
                </TouchableHighlight>
              )
            })
          }
        </ScrollView>
      </ListBox>
    )
  }
}

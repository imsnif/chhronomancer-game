import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'
import ListBox from '../list-box'
import styles from './styles'

import playerStore from '../../stores/player'
import timelineStore from '../../stores/timeline'
import powerStore from '../../stores/power'

import steal from '../../assets/items/steal-green.png'
import assistPrevent from '../../assets/items/assist-prevent-green.png'
import reset from '../../assets/items/reset-green.png'
import lock from '../../assets/items/padlock-green.png'
import unlock from '../../assets/items/unlock-green.png'

import stealBright from '../../assets/items/steal-green-bright.png'
import assistPreventBright from '../../assets/items/assist-prevent-green-bright.png'
import resetBright from '../../assets/items/reset-green-bright.png'
import lockBright from '../../assets/items/padlock-green-bright.png'
import unlockBright from '../../assets/items/unlock-green-bright.png'

const images = {steal, assistPrevent, reset, lock, unlock}
const imagesBright = {
  steal: stealBright,
  assistPrevent: assistPreventBright,
  reset: resetBright,
  lock: lockBright,
  unlock: unlockBright
}

const itemNames = {
  steal: 'Steal',
  assistPrevent: 'A / P',
  reset: 'Reset',
  lock: 'Lock',
  unlock: 'Unlock'
}

@observer
export default class CharacterSheet extends Component {
  render () {
    const playerId = this.props.playerId
    const player = playerStore.getPlayer(playerId)
    const items = player.items
    const playerTimelines = timelineStore.timelines.filter(t => t.players.some(pId => pId === playerId))
    const playerPowers = powerStore.getPlayerPowers(playerId)
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
          <View style={{flex: 1, marginBottom: 4}}>
            <ListBox title='Items'>
              <View style={styles.boxContents}>
                {
                  Object.keys(items).map((item, index) => {
                    return (
                      <View key={index} style={styles.participantIndication}>
                        <Image
                          source={items[item] ? imagesBright[item] : images[item]}
                          style={styles.imageBox}
                        />
                        <View style={styles.nameTextBox}>
                          <Text style={styles.nameText}>{itemNames[item]}</Text>
                          <Text style={styles.details}>?</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </ListBox>
          </View>
          <View style={{flex: 1, marginTop: 4}}>
            <ListBox title='Iterations'>
              {
                playerPowers.map(power => {
                  const timelineName = power.timelineName
                  const powerName = power.name
                  const progress = powerStore.getProgress(playerId, timelineName)
                  const timeline = timelineStore.getTimeline(timelineName)
                  const type = timeline.type
                  return (
                    <View key={timelineName} style={styles.participantIndication}>
                      <Image
                        source={images[type]}
                        style={styles.imageBox}
                      />
                      <View style={{flex: 8, flexDirection: 'column'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text style={styles.nameTextHalfCenter}>{timelineName}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text style={styles.nameTextHalf}>{powerName}</Text>
                          <Text style={styles.nameTextHalfRight}>{progress.get()}%</Text>
                        </View>
                      </View>
                    </View>
                  )
                })
              }
            </ListBox>
          </View>
        </View>
      </View>
    )
  }
}

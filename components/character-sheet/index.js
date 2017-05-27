import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'
import ListBox from '../list-box'
import Power from '../power'
import styles from './styles'

import playerStore from '../../stores/player'
import timelineStore from '../../stores/timeline'
import powerStore from '../../stores/power'
import statsStore from '../../stores/stats'

import steal from '../../assets/items/steal-green.png'
import assist from '../../assets/items/assist-green.png'
import prevent from '../../assets/items/prevent-green.png'
import reset from '../../assets/items/reset-green.png'
import lock from '../../assets/items/padlock-green.png'
import unlock from '../../assets/items/unlock-green.png'

import stealEmpty from '../../assets/items/steal-green-empty.png'
import assistEmpty from '../../assets/items/assist-green-empty.png'
import preventEmpty from '../../assets/items/prevent-green-empty.png'
import resetEmpty from '../../assets/items/reset-green-empty.png'
import lockEmpty from '../../assets/items/padlock-green-empty.png'
import unlockEmpty from '../../assets/items/unlock-green-empty.png'

const images = {steal, assist, prevent, reset, lock, unlock}
const imagesEmpty = {
  steal: stealEmpty,
  assist: assistEmpty,
  prevent: preventEmpty,
  reset: resetEmpty,
  lock: lockEmpty,
  unlock: unlockEmpty
}

const itemNames = {
  steal: 'Steal',
  assist: 'Assist',
  prevent: 'Prevent',
  reset: 'Reset',
  lock: 'Lock',
  unlock: 'Unlock'
}

@observer
export default class CharacterSheet extends Component {
  render () {
    const playerId = statsStore.playerId
    const actions = statsStore.actions
    const player = playerStore.getPlayer(playerId)
    const items = player.items.reduce((memo, item) => {
      const existingItem = memo.find(i => i.name === item.name)
      if (!existingItem) {
        memo.push(Object.assign({}, item, {count: 1}))
      } else {
        existingItem.count += 1
      }
      return memo
    }, [])
    const itemCount = player.items.filter(i => i.source).length
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
          <Text style={styles.titleTextStats}>{actions}</Text>
        </View>
        <View style={styles.summaryBox}>
          <View style={{flex: 1, marginBottom: 2}}>
            <ListBox title='Items' subtitle={`Cap: ${itemCount}/7`}>
              <View style={styles.boxContents}>
                {
                  items.map((item, index) => {
                    const itemCount = item.count
                    const nameAndCountString = itemCount > 1
                      ? `${itemNames[item.name]} (x${itemCount})`
                      : itemNames[item.name]
                    return (
                      <View key={index} style={styles.participantIndication}>
                        <Image
                          source={item.source ? images[item.name] : imagesEmpty[item.name]}
                          style={styles.imageBox}
                        />
                        <View style={styles.nameTextBox}>
                          <Text style={item.source ? styles.boldNameText : styles.nameText}>{nameAndCountString}</Text>
                          <Text style={styles.details}>?</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </ListBox>
          </View>
          <View style={{flex: 1, marginTop: 2}}>
            <ListBox title='Iterations'>
              {
                playerPowers.map((power, index) => {
                  const timelineName = power.timelineName
                  const powerName = power.name
                  const progress = powerStore.getProgress(playerId, timelineName)
                  const timeLeft = powerStore.getTimeLeft(playerId, timelineName)
                  const timeline = timelineStore.getTimeline(timelineName)
                  const type = timeline.type
                  return(
                    <View key={index} style={{
                      height: 25,
                      flexDirection: 'column'
                    }}>
                      <View style={{flex: 1, marginTop: 5}}>
                        <Text style={styles.nameTextHalfCenter}>{timelineName}</Text>
                      </View>
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

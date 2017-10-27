import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView, View, Image, Text } from 'react-native'
import styles from './styles'

import playerStore from '../../stores/player'
import messageStore from '../../stores/message'

@observer
export default class Feed extends Component {
  componentDidMount () {
    messageStore.markAllAsRead()
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView>
            {
              messageStore.messages
              .sort((a, b) => a.startTime > b.startTime ? -1 : 1)
              .map(message => {
                const player = playerStore.getPlayer(message.playerId)
                return (
                  <View key={message.id} style={styles.messageContainer}>
                    <View key={message.id} style={styles.messageTitleLine}>
                      <Image source={{uri: player.picture}} style={styles.participantImage}>
                        <View style={styles.imageOverlay} />
                      </Image>
                      <View style={styles.section}>
                        <Text numberOfLines={1} style={styles.nameText}>{player.name}</Text>
                      </View>
                      <View style={styles.section}>
                        <Text numberOfLines={1} style={styles.timelineText}>{message.timelineName}</Text>
                      </View>
                    </View>
                    <Text numberOfLines={1} style={styles.actionText}>{message.text}</Text>
                    <Text numberOfLines={1} style={styles.timeLeftText}>{message.startTime}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

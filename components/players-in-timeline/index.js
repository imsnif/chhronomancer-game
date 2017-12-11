import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { observer } from 'mobx-react/native'
import Player from '../player'
import styles from './styles'
import sortPlayers from './sort-players.js'

import timelineStore from '../../stores/timeline'

@observer
export default class PlayersInTimeline extends Component {
  render () {
    const { name } = this.props
    const timeline = timelineStore.getTimeline(name)
    return (
      <View style={styles.scrollContainer}>
        <ScrollView>
          {
            timeline.players
            .sort((p1Id, p2Id) => sortPlayers(p1Id, p2Id, name))
            .map(pId =>
              <Player
                key={pId}
                id={pId}
                navigator={this.props.navigator}
                timelineName={this.props.name}
              />
            )
          }
        </ScrollView>
      </View>
    )
  }
}

import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Text, Image } from 'react-native'
import ListBox from '../list-box'
import MenuButton from '../menu-button'
import styles from './styles'

import playerStore from '../../stores/player'

@observer
export default class ExternalParties extends Component {
  render () {
    const parties = this.props.parties || []
    const { name, total, image } = this.props
    return (
      <ListBox title={name} subtitle={total} image={image}>
        <View style={styles.boxContents}>
          <View style={styles.playerList}>
            {
              parties.map(({id, score}) => {
                const player = playerStore.getPlayer(id)
                return (
                  <View key={id} style={styles.participantIndication}>
                    <Image source={player.image} style={styles.participantImage} />
                    <View style={styles.nameTextBox}>
                      <Text style={styles.nameText}>{player.name}</Text>
                    </View>
                    <View style={styles.scoreTextBox}>
                      <Text style={styles.scoreText}>{score}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MenuButton fontSize={80} title='+' />
        </View>
      </ListBox>
    )
  }
}

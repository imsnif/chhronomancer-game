import React from 'react'
import { View } from 'react-native'
import ListBox from '../list-box'
import PlayerWithScore from '../player-with-score'
import MenuButton from '../menu-button'
import styles from './styles'

export default function ExternalParties (props) {
  const parties = props.parties || []
  const { name, total, image } = props
  return (
    <ListBox title={name} subtitle={total} image={image.uri ? Object.assign({}, image, {type: 'player'}) : image}>
      <View style={styles.playerList}>
        {
          parties.map(({id, score}) => <PlayerWithScore key={id} id={id} score={score} />)
        }
      </View>
      <View style={styles.buttonContainer}>
        <MenuButton fontSize={80} title='+' onPress={props.onPress} />
      </View>
    </ListBox>
  )
}

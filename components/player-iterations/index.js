import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView } from 'react-native'
import ListBox from '../list-box'
import Iteration from '../iteration'

import powerStore from '../../stores/power'

@observer
export default class PlayerIterations extends Component {
  render () {
    const { playerId } = this.props
    const playerPowers = powerStore.getPlayerPowers(playerId)
    return (
      <ListBox title='Iterations'>
        <ScrollView>
          {
            playerPowers.map(
              power => <Iteration
                key={`${power.name}${power.timelineName}`}
                power={power}
                navigator={this.props.navigator}
              />
            )
          }
        </ScrollView>
      </ListBox>
    )
  }
}

import _ from 'lodash'
import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'
import InfoBox from './info-box'
import LowItems from './low-items'
import MidItems from './mid-items'
import HighItems from './high-items'
import Power from './power'

export default class Player extends Component {
  render() {
    const lowItems = _.pick(this.props.items, ['red', 'green', 'blue'])
    const midItems = _.pick(this.props.items, ['purple', 'brown'])
    const highItems = _.pick(this.props.items, ['black'])
    const activePower = this.props.activePower
    return (
      <InfoBox title={this.props.name} image={this.props.image}>
        {
          activePower
            ? <Power
                name={activePower.name}
                progress={activePower.progress}
                timeLeft={activePower.timeLeft}
                alliedPlayers={activePower.alliedPlayers}
                enemyPlayers={activePower.enemyPlayers}
              />
            : <View style={{flex: 1}} />
        }
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <LowItems items={lowItems}/>
          <MidItems items={midItems}/>
          <HighItems items={highItems}/>
        </View>
      </InfoBox>
    )
  }
}

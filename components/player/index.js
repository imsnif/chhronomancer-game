import _ from 'lodash'
import React, { Component } from 'react'
import { View, Animated, TouchableHighlight } from 'react-native'
import { observer } from 'mobx-react/native'
import InfoBox from '../info-box'
import LowItems from '../low-items'
import MidItems from '../mid-items'
import InventoryCount from '../inventory-count'
import Power from '../power'
import moment from 'moment'

import playersStore from '../../stores/players'
import clockStore from '../../stores/clock'
import powerStore from '../../stores/power'

function calcProgress (activePower, time) {
  const whole = activePower.endTime - activePower.startTime
  const elapsed = time - activePower.startTime
  const progress = Math.round((elapsed / whole) * 100)
  return progress < 100 ? progress : 100
}

function formatTimeLeft (activePower, time) {
  const timeLeft = activePower.endTime - time > 0
    ? activePower.endTime - time
    : 0
  const duration = moment.duration(timeLeft)
  return moment.utc(duration.as('milliseconds')).format('HH:mm:ss')
}

@observer
export default class Player extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount () {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1200
      }
    ).start()
  }
  navigate () {
    this.props.navigator.push({
      screenName: 'Bidding'
    })
  }
  render () {
    const timelineName = this.props.timelineName
    const player = playersStore.getPlayer(this.props.id)
    const lowItems = _.pick(player.items, ['assistPrevent', 'reset', 'steal'])
    const midItems = _.pick(player.items, ['lock', 'unlock'])
    const activePower = powerStore.getPower(player.id, timelineName)
    const time = clockStore.time
    const count = player.items
      ? Object.keys(player.items).filter(i => player.items[i]).length
      : 0
    return (
      <Animated.View style={{opacity: this.state.fadeAnim}}>
        <TouchableHighlight onPress={this.navigate}>
          <InfoBox title={player.name} image={player.image}>
            {
              activePower
                ? <Power
                  name={activePower.name}
                  progress={calcProgress(activePower, time)}
                  timeLeft={formatTimeLeft(activePower, time)}
                  alliedPlayers={activePower.alliedPlayers}
                  enemyPlayers={activePower.enemyPlayers}
                  />
                : <View style={{flex: 1}} />
            }
            <View style={{flex: 1, flexDirection: 'row'}}>
              <LowItems items={lowItems} />
              <MidItems items={midItems} />
              <InventoryCount count={count} />
            </View>
          </InfoBox>
        </TouchableHighlight>
      </Animated.View>
    )
  }
}

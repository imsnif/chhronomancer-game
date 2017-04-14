import _ from 'lodash'
import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { observer } from 'mobx-react/native'
import InfoBox from './info-box'
import LowItems from './low-items'
import MidItems from './mid-items'
import HighItems from './high-items'
import Power from './power'
import moment from 'moment'

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
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1200
      }
    ).start()
  }
  render() {
    const lowItems = _.pick(this.props.items, ['red', 'green', 'blue'])
    const midItems = _.pick(this.props.items, ['purple', 'brown'])
    const highItems = _.pick(this.props.items, ['black'])
    const activePower = this.props.activePower
    const time = this.props.clockStore.time
    return (
      <Animated.View style={{opacity: this.state.fadeAnim}}>
        <InfoBox title={this.props.name} image={this.props.image}>
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
          <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>
            <LowItems items={lowItems}/>
            <MidItems items={midItems}/>
            <HighItems items={highItems}/>
          </View>
        </InfoBox>
      </Animated.View>
    )
  }
}

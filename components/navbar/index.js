import _ from 'lodash'
import React, { Component } from 'react'
import { View, Text, TouchableHighlight, BackAndroid } from 'react-native'
import { observer } from 'mobx-react/native'
import InfoBox from '../info-box'
import LowItems from '../low-items'
import MidItems from '../mid-items'
import InventoryCount from '../inventory-count'
import Power from '../power'

import playerStore from '../../stores/player'
import powerStore from '../../stores/power'

import commonStyles from '../common/styles'

@observer
export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: null
    }
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop()
        return true
      }
      return false
    })
  }
  navigate (screenName) {
    this.props.navigator.push({screenName})
  }
  render () {
    // TODO: refactor
    const screens = this.props.navigator.getCurrentRoutes()
    const { screenName } = screens[screens.length - 1]
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#141313'}}>
        <View style={{flexDirection: 'column', height: 30, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableHighlight underlayColor={commonStyles.backgroundColor} onPress={() => this.navigate('character-sheet')} style={{flex: 1}}>
              <Text
                style={{flex: 1, color: '#329932', fontFamily: 'telegrama_raw', textAlign: 'center', textAlignVertical: 'bottom', includeFontPadding: false, lineHeight: 9, height: 9}}>
                { screenName === 'character-sheet' ? '[ Character ]' : 'Character' }
              </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={commonStyles.backgroundColor} onPress={() => this.navigate('timeline-grid')} style={{flex: 1}}>
              <Text
                style={{flex: 1, color: '#329932', fontFamily: 'telegrama_raw', textAlign: 'center', textAlignVertical: 'bottom', includeFontPadding: false, lineHeight: 9, height: 9}}>
                { screenName === 'timeline-grid' ? '[ Timelines ]' : 'Timelines' }
              </Text>
            </TouchableHighlight>
          </View>
          <Text style={{color: '#329932', fontSize: 21, height: 15, textAlignVertical: 'top', includeFontPadding: false, lineHeight: 15}}>+--------------------------------------------------------+</Text>
        </View>
        <View style={{flex: 2}}>
          {this.props.children}
        </View>
      </View>
    )
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', () => {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop()
        return true
      }
      return false
    })
  }
}

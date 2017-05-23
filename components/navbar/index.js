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
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#141313'}}>
        <View style={{flexDirection: 'column', height: 45, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableHighlight onPress={() => this.setState({clicked: 'character'})} style={{flex: 1}}>
              <Text onClick={() => this.setState({clicked: 'character'})}
                style={{flex: 1, color: '#329932', fontFamily: 'telegrama_raw', textAlign: 'center', textAlignVertical: 'bottom', includeFontPadding: false, lineHeight: 15}}>
                { this.state.clicked === 'character' ? '[ Character ]' : 'Character' }
              </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.setState({clicked: 'timelines'})} style={{flex: 1}}>
              <Text onClick={() => this.setState({clicked: 'timelines'})}
                style={{flex: 1, color: '#329932', fontFamily: 'telegrama_raw', textAlign: 'center', textAlignVertical: 'bottom', includeFontPadding: false, lineHeight: 15}}>
                { this.state.clicked === 'timelines' ? '[ Timelines ]' : 'Timelines' }
              </Text>
            </TouchableHighlight>
          </View>
          <Text style={{color: '#329932', fontSize: 21, height: 25, textAlignVertical: 'top', includeFontPadding: false, lineHeight: 15}}>+--------------------------------------------------------+</Text>
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

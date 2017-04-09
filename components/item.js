import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Item extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const colorFillTop = {
      borderBottomColor: this.props.color
    }
    const colorFillBottom = {
      borderTopColor: this.props.color
    }
    const topStyle = StyleSheet.flatten([styles.diamondShieldTop, colorFillTop])
    const bottomStyle = StyleSheet.flatten([styles.diamondShieldBottom, colorFillBottom])
    return (
      <View style={{
        margin: 4,
        height: 20,
        width: 20,
        backgroundColor: this.props.fill ? '#02ffff' : '#2f3241',
        borderWidth: 1,
        borderColor: '#02ffff',
        borderRadius: 2,
        alignItems: 'center'
      }}>
        <View style={styles.diamondShield}>
          <View style={topStyle}/>
          <View style={bottomStyle}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  diamondShield: {
    width: 10,
    height: 10
  },
  diamondShieldTop: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  diamondShieldBottom: {
    width: 0,
    height: 0,
    borderTopWidth: 7,
    borderTopColor: 'red',
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    borderBottomColor: 'transparent',
    borderBottomWidth: 5,
  }
})

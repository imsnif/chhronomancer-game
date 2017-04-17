import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import styles from './styles'

import commonStyles from '../common/styles'

export default function Item (props) {
  const topStyle = StyleSheet.flatten([
    styles.diamondShieldTop,
    { borderBottomColor: props.color }
  ])
  const bottomStyle = StyleSheet.flatten([
    styles.diamondShieldBottom,
    { borderTopColor: props.color }
  ])
  const boxStyle = StyleSheet.flatten([
    styles.boxStyle,
    {
      borderColor: 'black'
    }
  ])
  const diamond = StyleSheet.flatten([styles.diamond, {
    backgroundColor: props.fill ? props.color : commonStyles.backGround,
    borderColor: props.color
  }])
  if (props.fill) {
    return (
      <View style={styles.boxStyle}>
        <View style={{flexDirection: 'row', height: 10}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.boxStyle}>
        <View style={{flexDirection: 'row', height: 10}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: props.color, height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
            <View style={{backgroundColor: 'black', height: 1, width: 1}} />
          </View>
        </View>
      </View>
    )
  }
//  return (
//    <View style={boxStyle}>
//      <View style={diamond} />
//    </View>
//  )
}

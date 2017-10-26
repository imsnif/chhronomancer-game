import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

import common from '../common/styles'

module.exports = StyleSheet.create({
  barLine: {
    fontFamily: common.font,
    color: common.foreGround,
    flex: 7,
    textAlign: 'center',
    paddingTop: 2,
    fontSize: responsiveFontSize(0.8)
  },
  name: {
    flex: 1,
    fontFamily: common.font,
    color: common.foreGround,
    marginLeft: 9,
    textAlign: 'center',
    paddingTop: 2,
    fontSize: responsiveFontSize(0.8)
  }
})

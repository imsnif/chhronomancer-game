import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  barLine: {
    fontFamily: common.font,
    color: common.foreGround,
    flex: 7,
    textAlign: 'left',
    paddingTop: 2,
    fontSize: 6
  },
  name: {
    flex: 1,
    fontFamily: common.font,
    color: common.foreGround,
    marginLeft: 9,
    textAlign: 'left',
    paddingTop: 2,
    fontSize: 6
  }
})

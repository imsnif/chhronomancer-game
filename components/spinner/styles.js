import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: common.foreGround
  },
  spinner: {
    flex: 1,
    textAlign: 'center',
    fontFamily: common.font,
    color: common.backGround
  }
})

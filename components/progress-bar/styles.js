import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  container: {
    backgroundColor: common.backGround,
    flex: 1,
    padding: 5
  },
  barBorder: {
    backgroundColor: common.foreGround,
    borderRadius: common.borderRadius,
    flex: 1,
    padding: 1
  },
  barBox: {
    justifyContent: 'center',
    backgroundColor: common.backGround,
    flex: 1,
    width: '100%',
    borderRadius: common.borderRadius
  },
  progressIndicator: {
    height: '100%',
    flex: 1,
    borderRadius: common.borderRadius,
    position: 'absolute'
  },
  childrenContainer: {
    elevation: 6,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  }
})

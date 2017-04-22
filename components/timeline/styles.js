import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: common.backGround
  },
  playersContainer: {
    padding: 15,
    flex: 2
  },
  playersScroller: {
    flex: 1
  },
  scrollPad: {
    height: 10
  },
  buttonPad: {
    padding: 13,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separatingLine: {
    backgroundColor: common.foreGround,
    height: 1,
    flex: 0,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 6
  }
})

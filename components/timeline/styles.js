import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: common.backGround
  },
  playersContainer: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'black',
    borderStyle: 'dashed'
  },
  playersScroller: {
    flex: 1,
    padding: 5
  },
  scrollPad: {
    height: 10
  },
  buttonRow: {
    flex: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

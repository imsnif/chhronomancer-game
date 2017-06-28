import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    paddingTop: 5,
    backgroundColor: common.backGround
  },
  playersContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    flex: 2
  },
  playersScroller: {
    flex: 1
  },
  scrollPad: {
    height: 10
  },
  buttonPad: {
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
    marginRight: 15
  },
  verticalLine: {
    flex: 0,
    width: 1,
    backgroundColor: common.foreGround,
    height: '92%'
  }
})

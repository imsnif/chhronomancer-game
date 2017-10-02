import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  buttonPad: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: common.backGround
  },
  buttonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: common.backGround
  },
  middleButtonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    backgroundColor: common.backGround
  },
  leftButton: {
    marginRight: 2
  },
  rightButton: {
    marginLeft: 2
  }
})

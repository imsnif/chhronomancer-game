import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  modal: {
    height: 200,
    width: 300,
    backgroundColor: common.backGround
  },
  topBorder:{
    color: common.foreGround,
    fontSize: 21,
    height: 15,
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    lineHeight: 15
  },
  verticalLine: {
    width: 10,
    textAlignVertical: 'top',
    lineHeight: 13,
    color: common.foreGround,
    flex: 0,
    marginRight: 1,
    marginLeft: 1
  },
  text:{
    textAlign: 'center',
    flex: 0,
    width: 272,
    color: common.foreGround,
    fontSize: 17,
    fontFamily: common.font
  },
  buttonPad: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

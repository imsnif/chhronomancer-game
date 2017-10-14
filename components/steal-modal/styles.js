import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  itemContainer: {
    flex: 1,
    marginTop: 5,
    alignSelf: 'center'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonLeft: {
    flex: 1,
    marginRight: 2
  },
  buttonRight: {
    flex: 1,
    marginLeft: 2
  },
  modal: {
    height: 200,
    width: 300,
    backgroundColor: common.backGround
  },
  topBorder: {
    color: common.foreGround,
    textAlignVertical: 'bottom',
    includeFontPadding: false
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
  text: {
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
  }
})

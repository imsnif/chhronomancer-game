import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  wholeScreen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: common.backGround
  },
  topBar: {
    flexDirection: 'column',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionBar: {
    flex: 0,
    color: '#329932',
    fontFamily: 'telegrama_raw',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    lineHeight: 22,
    height: 19
  },
  navigationMenu: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

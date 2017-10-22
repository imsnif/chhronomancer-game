import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
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
    height: '15%',
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
    height: '20%',
    fontSize: responsiveFontSize(1.8)
  },
  error: {
    flex: 0,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#329932',
    fontFamily: 'telegrama_raw',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    backgroundColor: 'red',
    fontSize: responsiveFontSize(1.8)
  },
  navigationMenu: {
    alignSelf: 'center',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

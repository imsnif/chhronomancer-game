import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  menuText: {
    flex: 1,
    color: common.foreGround,
    fontFamily: common.font,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    lineHeight: 9,
    height: 9,
    fontSize: responsiveFontSize(1.8)
  }
})

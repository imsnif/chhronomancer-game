import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  separator: {
    color: common.foreGround,
    fontSize: responsiveFontSize(3),
    height: responsiveHeight(3),
    textAlignVertical: 'top',
    includeFontPadding: false,
    lineHeight: 15
  }
})

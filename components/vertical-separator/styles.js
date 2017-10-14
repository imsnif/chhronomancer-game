import { StyleSheet } from 'react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  separator: {
    width: responsiveWidth(3),
    textAlignVertical: 'top',
    lineHeight: 13,
    color: common.foreGround,
    flex: 0
  }
})

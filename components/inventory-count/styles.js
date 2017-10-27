import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

import commons from '../common/styles'

export default StyleSheet.create({
  countContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    fontFamily: commons.font,
    color: commons.foreGround,
    flexDirection: 'row',
    fontSize: responsiveFontSize(2),
    textAlignVertical: 'center'
  }
})

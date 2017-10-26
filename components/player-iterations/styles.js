import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  iterationItem: {
    height: responsiveHeight(4),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center'
  },
  timelineName: {
    textAlign: 'center',
    color: common.boldText,
    fontFamily: common.font,
    flex: 1,
    paddingTop: 2,
    paddingRight: 9,
    fontSize: responsiveFontSize(1),
    marginTop: 5
  }
})

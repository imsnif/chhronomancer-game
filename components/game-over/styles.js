import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  titleItem: common.titleItem,
  titleText: common.titleText,
  paddedSides: common.paddedSides,
  imageOverlay: common.imageOverlay,
  midSection: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center'
  },
  text: {
    textAlignVertical: 'center',
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: responsiveFontSize(4),
    color: common.foreGround,
    backgroundColor: common.backGround,
    textAlign: 'center'
  },
  playerImageBox: {
    marginBottom: 20,
    alignSelf: 'center',
    maxWidth: 200,
    maxHeight: 200,
    borderColor: 'black',
    flex: 2,
    backgroundColor: common.backGround,
    resizeMode: 'stretch'
  }
})

import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  imageOverlay: common.imageOverlay,
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listBox: {
    marginBottom: 7,
    height: 120
  },
  image: {
    margin: 4,
    width: 30,
    height: 30
  },
  lockedOverlay: {
    marginBottom: 7,
    height: 120,
    width: '100%',
    flex: 0,
    backgroundColor: common.backGround,
    opacity: 0.7,
    position: 'absolute'
  },
  lockedText: {
    fontFamily: common.font,
    fontSize: responsiveFontSize(10),
    color: common.foreGround,
    alignSelf: 'center',
    textAlignVertical: 'center',
    height: '100%'
  }
})

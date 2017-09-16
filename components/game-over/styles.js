import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  innerContainer: StyleSheet.flatten([common.container, {maxWidth: 291}]),
  titleItem: common.titleItem,
  titleText: common.titleText,
  topBorder: {
    paddingLeft: 15,
    paddingRight: 15,
    color: common.foreGround,
    fontSize: 21,
    height: 15,
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    lineHeight: 15
  },
  text: {
    textAlignVertical: 'center',
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: 25,
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

import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  outerBox: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderColor: common.foreGround,
    backgroundColor: common.foreGround,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 7,
    borderRadius: common.borderRadius,
    height: 120
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row'
  },
  imageBox: {
    width: 10,
    height: 28,
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: common.borderRadius,
    flex: 1,
    backgroundColor: common.backGround,
    resizeMode: 'stretch'
  },
  titleText: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    flex: 9,
    paddingTop: 6,
    textAlign: 'center',
    paddingRight: 30
  },
  contentBox: {
    margin: 1,
    flex: 3,
    flexDirection: 'column',
    backgroundColor: common.backGround,
    borderColor: common.backGround,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: common.borderRadius
  }
})

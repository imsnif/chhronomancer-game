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
    borderRadius: common.borderRadius
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBox: {
    width: 10,
    height: 26,
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
    flex: 7,
    textAlign: 'center'
  },
  subtitleText: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    flex: 2,
    textAlign: 'center'
  },
  contentBox: {
    margin: 1,
    flex: 13,
    flexDirection: 'column',
    backgroundColor: common.backGround,
    borderColor: common.backGround,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: common.borderRadius
  }
})

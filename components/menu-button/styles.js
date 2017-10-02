import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  buttonContainer: {
    height: '100%',
    width: '100%',
    flex: 1
  },
  text: {
    flex: 1,
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    textAlign: 'center'
  },
  textPress: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    textAlign: 'center'
  },
  button: {
    height: '100%',
    width: '100%',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.backGround,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSwitch: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.backGround,
    borderWidth: 1
  },
  buttonPress: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.foreGround,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPressSwitch: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.foreGround,
    borderWidth: 1
  }
})

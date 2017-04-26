import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  buttonContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginLeft: 2,
    marginRight: 2
  },
  text: {
    flex: 1,
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    textAlign: 'center',
    fontSize: 70
  },
  textPress: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    textAlign: 'center',
    fontSize: 70
  },
  button: {
    margin: 2,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
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
    margin: 2,
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

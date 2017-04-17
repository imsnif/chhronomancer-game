import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flex: 1,
    margin: 7
  },
  text: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    textAlign: 'center',
    paddingTop: 9,
    fontSize: 20
  },
  textPress: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    textAlign: 'center',
    paddingTop: 9,
    fontSize: 20
  },
  button: {
    width: '100%',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.backGround,
    borderWidth: 1
  },
  buttonPress: {
    width: '100%',
    flex: 1,
    borderRadius: common.borderRadius,
    backgroundColor: common.foreGround,
    borderColor: common.foreGround,
    borderWidth: 1
  }
})

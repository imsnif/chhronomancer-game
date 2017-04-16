import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flex: 1,
    margin: 7
  },
  text: {
    fontFamily: 'px_sans_nouveaux',
    color: common.foreGround,
    textAlign: 'center',
    paddingTop: 9
  },
  textPress: {
    fontFamily: 'px_sans_nouveaux',
    color: common.altText,
    textAlign: 'center',
    paddingTop: 9
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

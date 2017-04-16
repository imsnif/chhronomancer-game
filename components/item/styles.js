import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  boxStyle: {
    margin: 4,
    height: 14,
    width: 14,
    borderWidth: 1,
    borderColor: common.foreGround,
    borderRadius: common.borderRadius,
    backgroundColor: common.backGround,
    alignItems: 'center'
  },
  diamond: {
    marginTop: 2,
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'black',
    transform: [
      {rotate: '45deg'}
    ]
  },
  diamondShield: {
    width: 10,
    height: 10
  },
  diamondShieldTop: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  diamondShieldBottom: {
    width: 0,
    height: 0,
    borderTopWidth: 7,
    borderTopColor: 'red',
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    borderBottomColor: 'transparent',
    borderBottomWidth: 5,
  }
})

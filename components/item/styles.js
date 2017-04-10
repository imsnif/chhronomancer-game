import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  boxStyle: {
    margin: 4,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#02ffff',
    borderRadius: 2,
    alignItems: 'center'
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

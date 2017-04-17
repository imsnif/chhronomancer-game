import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  diamond: {
    margin: 4,
    width: 9,
    height: 9,
    backgroundColor: common.backGround,
    borderColor: common.backGround,
    borderWidth: 1,
    transform: [
      {rotate: '45deg'}
    ]
  }
})

import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  item: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  emptyItem: {
    backgroundColor: common.backGround,
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.9
  }
})

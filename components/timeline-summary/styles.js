import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  imageOverlay: common.imageOverlay,
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listBox: {
    marginBottom: 7,
    height: 120
  },
  image: {
    margin: 4,
    width: 30,
    height: 30
  }
})

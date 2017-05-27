import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: common.backGround
  },
  timelineScroll: {
    width: '100%',
    flexDirection: 'column'
  }
})

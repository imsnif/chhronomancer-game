import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: common.backGround,
    flexDirection: 'column'
  },
  timelineScroll: {
    width: '100%',
    flexDirection: 'column'
  },
  separatingLine: {
    backgroundColor: common.foreGround,
    height: 1,
    marginTop: 15
  },
  verticalLine: {
    flex: 0,
    width: 1,
    backgroundColor: common.foreGround,
    marginRight: 5,
    marginLeft: 5
  }
})

import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
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
    flex: 0,
    marginTop: 15,
    marginBottom: 13
  },
})

import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    backgroundColor: common.backGround,
    flexDirection: 'column'
  },
  timelineScroll: {
    width: '100%',
    flexDirection: 'column'
  },
  separatingLine: {
    color: '#329932',
    fontSize: 21,
    height: 13,
    textAlignVertical: 'top',
    includeFontPadding: false,
    lineHeight: 15,
    alignSelf: 'center',
    marginTop: 5
  },
  verticalLine: {
    lineHeight: 13,
    color: '#329932',
    flex: 0,
    marginRight: 5,
    marginLeft: 4
  }
})

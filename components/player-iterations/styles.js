import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  iterationItem: {
    height: 25,
    flexDirection: 'column'
  },
  timelineName: {
    textAlign: 'center',
    color: common.boldText,
    fontFamily: common.font,
    flex: 1,
    paddingTop: 2,
    paddingRight: 9,
    fontSize: 8,
    marginTop: 5
  }
})

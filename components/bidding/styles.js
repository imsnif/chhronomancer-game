import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  titleItem: common.titleItem,
  titleText: common.titleText,
  titleTextSmall: common.titleTextSmall,
  summaryBox: {
    flex: 9,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15
  },
  boxWithGap: {
    flex: 1,
    marginRight: 4
  }
})

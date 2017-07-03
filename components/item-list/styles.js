import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  itemImageBox: {
    width: undefined,
    height: undefined,
    flex: 1,
    backgroundColor: 'transparent',
    resizeMode: 'stretch',
    marginLeft: 3
  },
  item: {
    flex: 1,
    marginTop: 2,
    minHeight: 27,
    flexDirection: 'row'
  },
  itemName: {
    flex: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 5,
    paddingTop: 3,
    paddingLeft: 9
  },
  boldNameText: {
    color: common.boldText,
    fontFamily: common.font,
    flex: 5,
    paddingTop: 3,
    paddingLeft: 9
  },
  details: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 1,
    paddingTop: 5
  }
})

import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  itemImageBox: {
    width: responsiveHeight(3.5),
    height: responsiveHeight(3.5),
    flex: 0,
    resizeMode: 'stretch',
    marginLeft: 4
  },
  item: {
    flex: 0,
    height: responsiveHeight(3.5) + 2,
    marginTop: 2,
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
    paddingLeft: 9,
    height: '100%',
    textAlignVertical: 'center'
  },
  boldNameText: {
    color: common.boldText,
    fontFamily: common.font,
    flex: 5,
    paddingTop: 3,
    paddingLeft: 9,
    height: '100%',
    textAlignVertical: 'center'
  },
  details: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 1,
    paddingTop: 5
  }
})

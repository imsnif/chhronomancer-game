import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  imageOverlay: common.imageOverlay,
  titleItem: StyleSheet.flatten([common.titleItem, {height: 52, flex: 0}]),
  titleText: common.titleText,
  titleTextSmall: common.titleTextSmall,
  titleTextImage: StyleSheet.flatten([
    common.titleTextSmall,
    {flex: 5}
  ]),
  playerImageBox: {
    margin: 1,
    width: 50,
    height: 50,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'black',
    flex: 0,
    backgroundColor: common.backGround,
    resizeMode: 'cover'
  },
  summaryBox: {
    paddingLeft: 15,
    paddingRight: 15,
    // height: (responsiveHeight(3.5) + 2) * 6 + 35, // CONTINUE HERE - fix this so that itemlist contains all items and just them
    flex: 1,
    flexDirection: 'column'
  },
  boxContainerTop: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    height: (responsiveHeight(3.5) + 2) * 6 + 50,
    marginBottom: 2
  },
  boxContainerBottom: {
    flex: 1,
    marginTop: 2
  }
})

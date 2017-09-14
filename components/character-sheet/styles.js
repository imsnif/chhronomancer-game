import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  titleItem: common.titleItem,
  titleText: common.titleText,
  titleTextSmall: common.titleTextSmall,
  playerImageBox: {
    height: '95%',
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    backgroundColor: common.backGround,
    resizeMode: 'stretch'
  },
  summaryBox: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 9,
    flexDirection: 'column'
  },
  imageGreenOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    opacity: 0.5
  },
  boxContainerTop: {
    flex: 1,
    marginBottom: 2
  },
  boxContainerBottom: {
    flex: 1,
    marginTop: 2
  }
})

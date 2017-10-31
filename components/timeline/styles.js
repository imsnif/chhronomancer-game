import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  titleItem: StyleSheet.flatten([common.titleItem, {height: 40, flex: 0}]),
  titleText: StyleSheet.flatten([common.titleText, {fontSize: responsiveFontSize(3)}]),
  buttonPad: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: common.backGround
  },
  buttonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: common.backGround
  },
  middleButtonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    backgroundColor: common.backGround
  },
  leftButton: {
    marginRight: 2
  },
  rightButton: {
    marginLeft: 2
  },
  timelineItemType: {
    width: 38,
    height: 38,
    borderColor: 'black',
    borderWidth: 1,
    margin: 1,
    flex: 0,
    backgroundColor: '#141313',
    resizeMode: 'contain'
  }
})

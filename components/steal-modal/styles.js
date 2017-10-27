import { StyleSheet } from 'react-native'
import {
  responsiveFontSize
} from 'react-native-responsive-dimensions'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  itemContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  item: {
    alignSelf: 'center',
    margin: 0,
    width: 30,
    height: 30
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center'
  },
  buttonLeft: {
    flex: 1,
    marginRight: 2
  },
  buttonRight: {
    flex: 1,
    marginLeft: 2
  },
  modal: {
    height: '50%',
    width: '90%',
    backgroundColor: common.backGround
  },
  topBorder: {
    height: '10%'
  },
  verticalLine: {
    height: '90%',
    width: '5%'
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: '100%',
    color: common.foreGround,
    fontSize: responsiveFontSize(2.5),
    fontFamily: common.font
  },
  buttonPad: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

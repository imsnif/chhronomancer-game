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
    textAlign: 'center',
    flex: 0,
    width: '100%',
    color: common.foreGround,
    fontSize: responsiveFontSize(3),
    fontFamily: common.font
  },
  buttonPad: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

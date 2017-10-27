import { StyleSheet } from 'react-native'
import {
  responsiveFontSize
} from 'react-native-responsive-dimensions'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  contentContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 10
  },
  cancelContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10
  },
  cancelText: {
    fontSize: responsiveFontSize(3)
  },
  modal: {
    height: '70%',
    width: '90%',
    backgroundColor: common.backGround
  },
  topBorder: {
    height: '10%'
  },
  text: {
    flex: 0,
    color: common.foreGround,
    width: 50,
    textAlign: 'center',
    fontSize: responsiveFontSize(3)
  },
  winText: {
    color: common.backGround,
    backgroundColor: common.foreGround,
    fontSize: responsiveFontSize(3),
    fontFamily: common.font,
    flex: 1,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  item: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})

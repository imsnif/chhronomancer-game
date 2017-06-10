import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: common.foreGround
  },
  selected: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: common.foreGround,
    justifyContent: 'center'
  },
  unSelected: {
    height: '100%',
    width: '100%',
    flex: 1,
    borderBottomColor: common.foreGround,
    borderBottomWidth: 1,
    backgroundColor: common.backGround,
    justifyContent: 'center'
  },
  selectedText: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  },
  unSelectedText: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  }
})

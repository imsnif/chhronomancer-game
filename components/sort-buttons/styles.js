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
    borderWidth: 1,
    borderColor: common.foreGround
  },
  selected: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: common.foreGround
  },
  selectedText: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    textAlign: 'center',
    paddingTop: 13,
    fontSize: 20
  },
  unSelectedMiddle: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.backGround,
    borderBottomWidth: 1
  },
  unSelected: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    borderRadius: common.borderRadius,
    borderColor: common.foreGround,
    backgroundColor: common.backGround
  },
  unSelectedText: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    textAlign: 'center',
    paddingTop: 13,
    fontSize: 20
  }
})

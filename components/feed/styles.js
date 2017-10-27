import { StyleSheet } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  imageOverlay: common.imageOverlay,
  participantImage: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 1,
    height: 26,
    width: 26,
    flex: 0,
    resizeMode: 'stretch'
  },
  nameText: {
    color: common.backGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'flex-start',
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 5,
    fontSize: responsiveFontSize(1.5),
    textAlignVertical: 'center'
  },
  actionText: {
    color: common.backGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'flex-start',
    fontSize: responsiveFontSize(1.3),
    textAlignVertical: 'center'
  },
  timelineText: {
    color: common.backGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.5)
  },
  timeLeftText: {
    color: common.backGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'flex-start',
    textAlignVertical: 'bottom',
    fontSize: responsiveFontSize(1)
  },
  messageContainer: {
    backgroundColor: common.foreGround,
    flexDirection: 'column',
    height: 60,
    width: '100%',
    marginBottom: 5
  },
  messageTitleLine: {
    flexDirection: 'row',
    width: '100%'
  },
  section: {
    flex: 1,
    flexDirection: 'column'
  }
})

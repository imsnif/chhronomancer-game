import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  imageOverlay: common.imageOverlay,
  participantImage: {
    margin: 1,
    height: 26,
    width: 26,
    flex: 0,
    resizeMode: 'stretch'
  },
  nameText: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'flex-start',
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 5,
    fontSize: 11
  },
  actionText: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'flex-start',
    marginBottom: 3,
    paddingLeft: 3,
    paddingRight: 5,
    fontSize: 9
  },
  timelineText: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'center',
    fontSize: 14
  },
  timeLeftText: {
    color: common.foreGround,
    fontFamily: common.font,
    flex: 1,
    alignSelf: 'center',
    fontSize: 9
  },
  messageContainer: {
    flexDirection: 'row',
    height: 30,
    width: '100%',
    marginBottom: 5
  },
  section: {
    flex: 1,
    flexDirection: 'column'
  }
})

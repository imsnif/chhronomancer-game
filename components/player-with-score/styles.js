import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  imageOverlay: common.imageOverlay,
  playerList: {
    flex: 4,
    flexDirection: 'column'
  },
  participantIndication: {
    flex: 1,
    margin: 1,
    maxHeight: 30,
    flexDirection: 'row'
  },
  participantImage: {
    margin: 1,
    height: 26,
    width: 26,
    flex: 0,
    resizeMode: 'stretch'
  },
  nameTextBox: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 1,
    alignSelf: 'center',
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 5
  },
  scoreTextBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreText: {
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 1,
    alignSelf: 'center',
    paddingTop: 3,
    paddingRight: 1
  },
  buttonContainer: {
    flex: 1,
    padding: 5
  }
})

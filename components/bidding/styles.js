import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: common.backGround,
    flexDirection: 'column'
  },
  titleItem: {
    flex: 1,
    marginBottom: 4,
    backgroundColor: common.foreGround,
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: 25,
    color: common.backGround,
    backgroundColor: common.foreGround,
    textAlign: 'center'
  },
  titleTextStatsCenter: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: 18,
    color: common.backGround,
    backgroundColor: common.foreGround,
    textAlign: 'center'
  },
  titleTextStats: {
    flex: 2,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: 18,
    color: common.backGround,
    backgroundColor: common.foreGround,
    textAlign: 'center'
  },
  summaryBox: {
    flex: 9,
    flexDirection: 'row'
  },
  boxContents: {
    flex: 4,
    flexDirection: 'column'
  },
  playerList: {
    flex: 1,
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
    width: 10,
    borderWidth: 1,
    flex: 1
  },
  nameTextBox: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 1,
    alignSelf: 'center'
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
    paddingTop: 3
  },
  buttonContainer: {
    flex: 1,
    padding: 5,
    paddingRight: 8
  },
  boxWithGap: {
    flex: 1,
    marginRight: 4
  }
})

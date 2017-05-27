import { StyleSheet } from 'react-native'
import common from '../common/styles'

export default StyleSheet.create({
  imageBox: {
    height: '95%',
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: common.borderRadius,
    flex: 1,
    backgroundColor: common.backGround,
    resizeMode: 'stretch'
  },
  itemImageBox: {
    width: undefined,
    height: undefined,
    flex: 1,
    backgroundColor: 'transparent',
    resizeMode: 'stretch',
    marginLeft: 3
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
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
  playerName: {
    flex: 5,
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
    flexDirection: 'column'
  },
  boxContents: {
    flex: 1,
    flexDirection: 'column'
  },
  playerList: {
    flex: 1,
    flexDirection: 'column'
  },
  participantIndication: {
    flex: 1,
    marginTop: 2,
    minHeight: 27,
    flexDirection: 'row'
  },
  participantImage: {
    margin: 1,
    height: 26,
    width: 10,
    borderWidth: 1,
    flex: 1
  },
  powerListItem: {
    margin: 1,
    height: 60,
    flexDirection: 'column'
  },
  nameTextBox: {
    flex: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  powerTextBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText: {
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 5,
    paddingTop: 3,
    paddingLeft: 9
  },
  boldNameText: {
    color: '#00ff00',
    fontFamily: 'telegrama_raw',
    flex: 5,
    paddingTop: 3,
    paddingLeft: 9
  },
  nameTextHalf: {
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 1,
    paddingTop: 2,
    paddingLeft: 9,
    fontSize: 8
  },
  nameTextHalfRight: {
    textAlign: 'right',
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 1,
    paddingTop: 2,
    paddingRight: 9,
    fontSize: 8
  },
  nameTextHalfCenter: {
    textAlign: 'center',
    color: '#00ff00',
    fontFamily: 'telegrama_raw',
    flex: 1,
    paddingTop: 2,
    paddingRight: 9,
    fontSize: 8
  },
  details: {
    color: 'green',
    fontFamily: 'telegrama_raw',
    flex: 1,
    paddingTop: 5
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
  dualBoxContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  iterationsContainer: {
    flex: 1,
    marginTop: 9
  },
  buttonContainer: {
    flex: 1,
    padding: 5,
    paddingRight: 8
  },
  boxWithGap: {
    flex: 1,
    marginRight: 8
  }
})

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15
  },
  leftPanelContainer: {
    flex: 2,
    marginTop: 5
  },
  rightPanelContainer: {
    flex: 1,
    marginTop: 5
  },
  horizontalLine: {
    alignSelf: 'center',
    marginTop: 5
  },
  verticalLine: {
    marginLeft: 4
  }
})

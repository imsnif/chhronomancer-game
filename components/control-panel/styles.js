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
  separatingLine: {
    color: '#329932',
    fontSize: 21,
    height: 13,
    textAlignVertical: 'top',
    includeFontPadding: false,
    lineHeight: 15,
    alignSelf: 'center',
    marginTop: 5
  },
  verticalLine: {
    lineHeight: 13,
    color: '#329932',
    flex: 0,
    marginRight: 5,
    marginLeft: 4
  }
})

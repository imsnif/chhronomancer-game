import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#2f3241',
    flex: 1,
    padding: 5
  },
  barBorder: {
    backgroundColor: '#02ffff',
    borderRadius: 2,
    flex: 1,
    padding: 2
  },
  barBox: {
    justifyContent: 'center',
    backgroundColor: '#2f3241',
    flex: 1,
    width: '100%',
    borderRadius: 2
  },
  progressIndicator: {
    height: '100%',
    flex: 1,
    borderRadius: 2,
    position: 'absolute'
  },
  childrenContainer: {
    elevation: 6,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  }
})

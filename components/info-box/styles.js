import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  outerBox: {
    flex: 1,
    flexDirection: 'column',
    borderColor: '#02ffff',
    backgroundColor: '#02ffff',
    borderWidth: 0.2,
    margin: 5,
    marginBottom: 15,
    borderRadius: 2,
    height: 100
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row'
  },
  imageBox: {
    width: 10,
    height: 21,
    margin: 2,
    marginBottom: 1,
    borderRadius: 2,
    flex: 1,
    backgroundColor: '#2f3241'
  },
  titleText: {
    color: '#2e1a29',
    flex: 9,
    textAlign: 'center',
    paddingRight: 30,
    paddingTop: 2,
    fontFamily: 'sans-serif'
  },
  contentBox: {
    margin: 2,
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#2f3241',
    borderColor: '#2f3241',
    borderWidth: 1,
    borderRadius: 2
  }
})

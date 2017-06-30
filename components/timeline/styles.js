import { StyleSheet } from 'react-native'

import common from '../common/styles'

export default StyleSheet.create({
  container: common.container,
  scrollContainer: common.scrollContainer,
  buttonPad: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

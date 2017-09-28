import { StyleSheet } from 'react-native'

import commons from '../common/styles'

export default StyleSheet.create({
  countContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    fontFamily: 'telegrama_raw',
    color: commons.foreGround,
    flexDirection: 'row',
    fontSize: 8,
    marginTop: 10
  }
})

import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  powerName: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    flex: 2,
    marginLeft: 4
  },
  timeLeft: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
    flex: 2,
    marginTop: 1
  },
  involvedPlayers: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 1
  },
  alliedPlayers: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround
  },
  divider: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround,
  },
  enemyPlayers: {
    fontFamily: 'telegrama_raw',
    color: common.foreGround
  }
})

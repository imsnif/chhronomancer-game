import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  powerName: {
    fontFamily: 'px_sans_nouveaux',
    color: common.foreGround,
    flex: 2,
    marginLeft: 4
  },
  timeLeft: {
    fontFamily: 'px_sans_nouveaux',
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
    fontFamily: 'px_sans_nouveaux',
    color: common.foreGround
  },
  divider: {
    fontFamily: 'px_sans_nouveaux',
    color: common.foreGround,
  },
  enemyPlayers: {
    fontFamily: 'px_sans_nouveaux',
    color: common.foreGround
  }
})

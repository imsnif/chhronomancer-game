import React from 'react'
import { Navigator } from 'react-native'

import statsStore from '../../stores/stats'

import Timeline from '../timeline'
import TimelineGrid from '../timeline-grid'
import Bidding from '../bidding'
import NavBar from '../navbar'
import CharacterSheet from '../character-sheet'

const InstantTransition = {
  gestures: null,
  defaultTransitionVelocity: null,
  springFriction: null,
  springTension: 1000,
  animationInterpolators: {
    into: r => {
      r.opacity = 1
      return true
    },
    out: r => {
      r.opacity = 1
      return true
    }
  }
}

export default function Game () {
  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{ screenName: 'character-sheet' }}
      renderScene={renderScene}
      configureScene={() => InstantTransition}
    />
  )
}

function renderScene (route, navigator) {
  return (
    <NavBar navigator={navigator}>
      {(() => {
        switch (route.screenName) {
          case 'timeline-grid':
            return (
              <TimelineGrid
                navigator={navigator}
              />
            )
          case 'Timeline':
            return (
              <Timeline
                navigator={navigator}
                name={route.timelineName}
              />
            )
          case 'Bidding':
            return (
              <Bidding
                playerId={route.playerId}
                timelineName={route.timelineName}
                navigator={navigator}
              />
            )
          case 'character-sheet':
            return (
              <CharacterSheet
                playerId={statsStore.playerId}
                navigator={navigator}
              />
            )
        }
      })()}
    </NavBar>
  )
}

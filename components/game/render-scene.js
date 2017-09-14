import React from 'react'

import statsStore from '../../stores/stats'

import Timeline from '../timeline'
import TimelineGrid from '../timeline-grid'
import Bidding from '../bidding'
import NavBar from '../navbar'
import CharacterSheet from '../character-sheet'

export default function renderScene (route, navigator) {
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

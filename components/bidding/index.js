import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ExternalParties from '../external-parties'
import styles from './styles'

const image = require('../../assets/placeholders/green_me.png')

export default class Bidding extends Component {
  render () {
    // connect this to the rest of the game, through stores, etc.
    // restructure the game data structure to facilitate this - probably keep powers in different store with references... allow players to have more than one activePower, categorize them by timelines, etc. etc.
    const powerName = 'Steal'
    const timelineName = 'Timeline 1'
    const timeLeft = '04:32'
    const percentage = '44%'
    const source = 'Aram'
    const destination = 'Gondollieri'
    const allies = [
      {id: 1, name: 'Aram', score: 7},
      {id: 2, name: 'Aram', score: 7},
      {id: 3, name: 'Aram', score: 7},
      {id: 4, name: 'Aram', score: 7},
      {id: 5, name: 'Aram', score: 7}
    ]
    const enemies = [
      {id: 1, name: 'EvilAram', score: 7},
      {id: 2, name: 'EvilAram', score: 7},
      {id: 3, name: 'EvilAram', score: 7},
      {id: 4, name: 'EvilAram', score: 7},
      {id: 5, name: 'EvilAram', score: 7},
      {id: 6, name: 'EvilAram', score: 7},
      {id: 7, name: 'EvilAram', score: 7}
    ]
    const totalFor = allies.map(a => a.score).reduce((a, b) => a + b, 0)
    const totalAgainst = enemies.map(a => a.score).reduce((a, b) => a + b, 0)
    const balance = totalFor - totalAgainst
    return (
      <View style={styles.container}>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>{powerName}</Text>
        </View>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>{timelineName}</Text>
        </View>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>{timeLeft}</Text>
          <Text style={styles.titleText}>{balance}</Text>
          <Text style={styles.titleText}>{percentage}</Text>
        </View>
        <View style={styles.summaryBox}>
          <View style={styles.boxWithGap}>
            <ExternalParties name={source} total={totalFor} image={image} parties={allies} />
          </View>
          <View style={{flex: 1}}>
            <ExternalParties name={destination} total={totalAgainst} image={image} parties={enemies} />
          </View>
        </View>
      </View>
    )
  }
}

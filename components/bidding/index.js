import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import ListBox from '../list-box'
import APButton from '../ap-button'
import styles from './styles'

const image = require('../../assets/placeholders/green_me.png')

export default class Bidding extends Component {
  render () {
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
            <ListBox title={source} subtitle={totalFor} image={image}>
              <View style={styles.boxContents}>
                <View style={styles.playerList}>
                  {
                    allies.map(a => {
                      return (
                        <View key={a.id} style={styles.participantIndication}>
                          <Image source={image} style={styles.participantImage} />
                          <View style={styles.nameTextBox}>
                            <Text style={styles.nameText}>{a.name}</Text>
                          </View>
                          <View style={styles.scoreTextBox}>
                            <Text style={styles.scoreText}>{a.score}</Text>
                          </View>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <APButton title='+' />
              </View>
            </ListBox>
          </View>
          <View style={{flex: 1}}>
            <ListBox title={destination} subtitle={totalAgainst} image={image}>
              <View style={styles.boxContents}>
                <View style={styles.playerList}>
                  {
                    enemies.map(a => {
                      return (
                        <View key={a.id} style={styles.participantIndication}>
                          <Image source={image} style={styles.participantImage} />
                          <View style={styles.nameTextBox}>
                            <Text style={styles.nameText}>{a.name}</Text>
                          </View>
                          <View style={styles.scoreTextBox}>
                            <Text style={styles.scoreText}>{a.score}</Text>
                          </View>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <APButton title='+' />
              </View>
            </ListBox>
          </View>
        </View>
      </View>
    )
  }
}

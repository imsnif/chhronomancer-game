import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { ScrollView, View } from 'react-native'
import styles from './styles'

import messageStore from '../../stores/message'

import LogMessage from '../log-message'

@observer
export default class Feed extends Component {
  componentDidMount () {
    messageStore.markAllAsRead()
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView>
            {
              messageStore.messages
              .sort((a, b) => a.startTime > b.startTime ? -1 : 1)
              .map(message => {
                return <LogMessage key={message.id} message={message} />
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

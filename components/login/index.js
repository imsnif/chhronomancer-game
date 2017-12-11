import React, { Component } from 'react'
import {
  View
} from 'react-native'

import { observer } from 'mobx-react/native'

import statsStore from '../../stores/stats'

import { FBLogin, FBLoginManager } from 'react-native-facebook-login'

@observer
export default class chronomancer extends Component {
  _onLogin (data) {
    statsStore.login(data)
  }
  render () {
    return (
      <FBLogin style={{ marginBottom: 10 }}
        buttonView={<View style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black'
        }} />}
        permissions={['email', 'user_friends']}
        loginBehavior={FBLoginManager.LoginBehaviors.Web}
        onLogin={this._onLogin}
        onLoginFound={this._onLogin}
      />
    )
  }
}

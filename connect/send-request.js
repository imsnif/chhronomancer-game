import statsStore from '../stores/stats'

const { serverAddress } = require('../config.json')
// TODO: test this and its derivatives
export default async function sendRequest (path) {
  try {
    const response = await fetch(`http://${serverAddress}${path}`, {
      method: 'POST',
      headers: {access_token: statsStore.accessToken}
    })
    if (!response.ok) {
      const error = await response.text()
      statsStore.addError(error)
    }
  } catch (e) {
    console.error(e)
  }
}

import statsStore from '../stores/stats'

// TODO: test this and its derivatives
export default async function sendRequest (path) {
  try {
    const response = await fetch(`http://10.0.0.6:3000${path}`, {
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

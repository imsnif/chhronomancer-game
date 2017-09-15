module.exports = {
  mockFB () {
    const login = require('react-native-facebook-login')
    const FBLogin = jest.fn()
    FBLogin.mockReturnValue(null)
    login.FBLogin = FBLogin
    login.FBLoginManager = {LoginBehaviors: {Web: 2}}
    return FBLogin
  },
  navigatorMock (routeName) {
    return {
      getCurrentRoutes: () => [routeName],
      push: () => {}
    }
  }
}

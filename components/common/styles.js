import { responsiveFontSize } from 'react-native-responsive-dimensions'

const borderRadius = 0
const foreGround = '#329932'
const backGround = '#141313'
const boldText = '#00ff00'
const altText = '#0e0e0e'
const font = 'telegrama_raw'

export default {
  borderRadius,
  foreGround,
  backGround,
  altText,
  font,
  boldText,
  paddedSides: {
    paddingLeft: 15,
    paddingRight: 15
  },
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: backGround,
    flexDirection: 'column'
  },
  scrollContainer: {
    flex: 2,
    paddingLeft: 15,
    paddingRight: 15
  },
  titleItem: {
    flex: 1,
    marginBottom: 4,
    backgroundColor: foreGround,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: responsiveFontSize(4),
    color: backGround,
    backgroundColor: foreGround,
    textAlign: 'center'
  },
  titleTextSmall: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'telegrama_raw',
    fontSize: responsiveFontSize(3),
    color: backGround,
    backgroundColor: foreGround,
    textAlign: 'center'
  },
  imageOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    opacity: 0.5
  }
}

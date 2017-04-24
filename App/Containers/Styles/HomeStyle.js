import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.navBarHeight,
    flex: 1,
    backgroundColor: Colors.steelblue
  },
  titolino: {
    marginTop: 10,
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '700'
  },
})

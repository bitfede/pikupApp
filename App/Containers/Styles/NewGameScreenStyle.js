import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titoletto: {
    color: 'yellow',
    fontWeight: '800',
    fontSize: 23
  }
})

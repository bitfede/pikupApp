import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: 70,
    backgroundColor: Colors.background
  },
})

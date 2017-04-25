import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  listRow: {
    marginVertical: 10,
    paddingHorizontal: 30,
    borderColor: 'silver',
    borderBottomWidth: 1
  },
  gameName: {
    color: 'yellow',
    fontSize: 17,
  },
  location: {
    color: 'white',
    fontSize: 14,
    paddingTop: 4,
    fontWeight: '300'
  },
  occupancy: {
    position: 'relative',
    color: 'yellow',
    marginRight: 80
  },
  time: {
    color: 'white',
    fontSize: 14,
    paddingTop: 4,
    fontWeight: '500'
  },
  created: {
    color: 'white',
    fontSize: 12,
    paddingTop: 4,
    fontWeight: '300',
    paddingBottom: 20
  },
})

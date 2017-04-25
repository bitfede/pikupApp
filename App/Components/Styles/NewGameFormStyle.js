import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    paddingVertical: 10
  },
  txtForm: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    borderRadius: 10,
    padding: 10
  },
  boton: {
    paddingTop: 20,
    width: 300
  }
})

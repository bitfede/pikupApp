import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.background
  },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 10
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  rowLabel: {
    color: Colors.steelblue
  },
  textInput: {
    height: 40,
    color: Colors.coal,
    borderWidth: 2,
    borderColor: Colors.steelblue,
    padding: 5,
    borderRadius: 10,
    marginTop: 8
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'column',
    marginTop: 20
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.steelblue,
    backgroundColor: Colors.snow,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  },
  loginText: {
    textAlign: 'center',
    color: Colors.steelblue,
    fontWeight: '700'
  },
  topLogo: {
    alignSelf: 'center',
  },
  appLogo: {
    color: 'white',
    fontSize: 70
  }
})

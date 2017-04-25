import React from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import GamesActions from '../Redux/GamesRedux'

import NewGameForm from '../Components/NewGameForm'

import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/NewGameScreenStyle'

class NewGame extends React.Component {

  render () {
    const { wrequestGames, payload, requestGames } = this.props
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.titoletto}>Create a New PickUp Game</Text>
          <NewGameForm requestGames={requestGames} postGame={wrequestGames} payload={payload} NavigationActions={NavigationActions} />
        </KeyboardAvoidingView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    //payloado
    payload: state.games.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //action games
    requestGames: () => dispatch(GamesActions.gamesRequest()),
    wrequestGames: (dataWr) => dispatch(GamesActions.gamesWriteRequest(dataWr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame)

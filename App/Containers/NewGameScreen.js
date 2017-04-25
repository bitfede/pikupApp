import React from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import GamesActions from '../Redux/GamesRedux'

import NewGameForm from '../Components/NewGameForm'

// Styles
import styles from './Styles/NewGameScreenStyle'

class NewGame extends React.Component {

  render () {
    const { wrequestGames } = this.props
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.titoletto}>Create a New PickUp Game</Text>
          <NewGameForm postGame={wrequestGames} />
        </KeyboardAvoidingView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //action games
    wrequestGames: (dataWr) => dispatch(GamesActions.gamesWRequest(dataWr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame)

import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import GamesActions from '../Redux/GamesRedux'

// Styles
import styles from './Styles/HomeStyle'

//Components
import GameList from './../Components/GameList'
import RoundedButton from './../Components/RoundedButton'

class Home extends React.Component {

  componentWillMount() {
    console.log("COMWILLMOUNT")
    const { requestGames } = this.props
    requestGames()
  }

  handlePress() {
    const { requestGames } = this.props
    requestGames()
  }

  render () {
    const { gamesFetching, gamesData } = this.props
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.titolino}>Games:</Text>
          <GameList gamesFetching={gamesFetching} gamesData={gamesData} />
          <View style={{height: 10}}><Text></Text></View>
          <RoundedButton
            text="Create New Game"
           />
           <RoundedButton
             text="Refresh"
             onPress={() => this.handlePress()}
            />
        </KeyboardAvoidingView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  console.debug("STATE", state)
  return {
    //state - games
    gamesFetching: state.games.fetching,
    gamesData: state.games.games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestGames: () => dispatch(GamesActions.gamesRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

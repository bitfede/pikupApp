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

  render () {
    const { requestGames } = this.props
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.titolino}>Games:</Text>
          <GameList />
          <View style={{height: 10}}><Text></Text></View>
          <RoundedButton
            text="Create New Game"
           />
           <RoundedButton
             text="Refresh"
             onPress={requestGames}
            />
        </KeyboardAvoidingView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    //state - games

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestGames: () => dispatch(GamesActions.gamesRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React from 'react'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/GameListStyle'

export default class GameList extends React.Component {


  generateList (gamesData) {

    const data = gamesData
    let counter = 0
    let list = Object.keys(data).map( (item, counter) => {
      counter = counter + 1
      return (
        <View key={counter} style={styles.listRow}>
          <Text style={styles.gameName}>
            {data[item].name}
          </Text>
          <Text style={styles.location}>
            {data[item].location}
          </Text>
          <Text style={styles.time}>
            {data[item].time}
          </Text>
          <Text style={styles.created}>
            Created By: <Text style={ {fontWeight: '500'} }>{data[item].createdby}</Text>
          </Text>
        </View>
      )
    } ) //end map fx

    return (
      list
    )
  }


  render () {
    const { gamesFetching, gamesData } = this.props
    if (gamesFetching == true) {
    console.log("fetchiiiinggg")
    return (
      <ScrollView style={styles.container, {marginTop: 200} }>
        <ActivityIndicator
          animating={true}
          size={'large'}
        />
      </ScrollView>
    )
    }
    else {
      return (
        <ScrollView style={styles.container}>
          { this.generateList(gamesData) }
        </ScrollView>
      )
    }
  }
}

// Prop type warnings
GameList.propTypes = {
  gamesFetching: React.PropTypes.bool,
  gamesData: React.PropTypes.object
}

// Defaults for props
GameList.defaultProps = {
  gamesFetching: true,
}

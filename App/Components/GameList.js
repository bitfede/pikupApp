import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from './Styles/GameListStyle'

export default class GameList extends React.Component {


  generateList () {
    const mockdata = [
      {
        gameName: "Andy 2v2", location: "UM Wellness Center: Court 2", time: "11:15AM", created: "Andy"
      },
      {
        gameName: "Casual 4v4", location: "UM Wellness Center: Court 1", time: "10:03AM", created: "Frank"
      },
    ]

    let counter = 0
    let list = mockdata.map( (item, counter) => {
      counter = counter + 1
      return (
        <View key={counter} style={styles.listRow}>
          <Text style={styles.gameName}>
            {item.gameName}
          </Text>
          <Text style={styles.location}>
            {item.location}
          </Text>
          <Text style={styles.time}>
            {item.time}
          </Text>
          <Text style={styles.created}>
            Created By: <Text style={ {fontWeight: '500'} }>{item.created}</Text>
          </Text>
        </View>
      )
    } ) //end map fx

    return (
      list
    )
  }



  render () {
    return (
      <ScrollView style={styles.container}>

        { this.generateList() }
      </ScrollView>
    )
  }
}

// // Prop type warnings
// GameList.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// GameList.defaultProps = {
//   someSetting: false
// }

import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/NewGameFormStyle'

import RoundedButton from '../Components/RoundedButton'

export default class NewGameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: null, createdby: null, location: null, time: null}
  }

  handlePress() {
    const { postGame } = this.props
    const { name, time, location, createdby } = this.state
    let dataWr = {
      name: name,
      location: location,
      time: time,
      createdby: createdby
    }

    console.debug(dataWr)
    // postGame(dataWr)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Game Name?</Text>
        <TextInput
        style={styles.txtForm}
        onChangeText={(textN) => this.setState({name: textN})}
        value={this.state.name}
        />
        <Text style={styles.label}>Latest Time To Play?</Text>
        <TextInput
        style={styles.txtForm}
        onChangeText={(textT) => this.setState({time: textT})}
        value={this.state.time}
        />
        <Text style={styles.label}>Location?</Text>
        <TextInput
        style={styles.txtForm}
        onChangeText={(textL) => this.setState({location: textL})}
        value={this.state.location}
        />
        <Text style={styles.label}>Your name?</Text>
        <TextInput
        style={styles.txtForm}
        onChangeText={(textC) => this.setState({createdby: textC})}
        value={this.state.createdby}
        />
        <View style={styles.boton}>
          <RoundedButton
            text="Publish"
            onPress={ () => this.handlePress() }
          />
        </View>
      </View>
    )
  }
}

// Prop type warnings
NewGameForm.propTypes = {
  postGame: React.PropTypes.funct
}

// Defaults for props
NewGameForm.defaultProps = {
  someSetting: false
}

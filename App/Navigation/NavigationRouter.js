import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import CustomNavBar from './CustomNavBar'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import HomeScreen from '../Containers/HomeScreen'
import NewGame from '../Containers/NewGameScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene  key='LoginScreen' component={LoginScreen} title='LoginScreen' hideNavBar />
          <Scene initial key='HomeScreen' component={HomeScreen} title='Home' hideNavBar={false} navBar={CustomNavBar} />
          <Scene  key='NewGame' component={NewGame} title='NewGame' hideNavBar={false} />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter

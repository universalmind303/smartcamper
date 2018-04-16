/* @flow */

import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NativeRouter as Router, Route } from 'react-router-native'

import Footer from './src/core/footer'
import Toolbar from './src/core/toolbar'
import lightControl from './src/lightControl'
import thermostat from './src/thermostat'
import powerManagement from './src/powerManagement'

const App = (): PureComponent => (
  <Router>
    <View>
      <Toolbar />
      <Route exact path="/lights" component={lightControl} />
      <Route exact path="/thermostat" component={thermostat} />
      <Route exact path="/power" component={powerManagement} />
      <Footer
        routes={[
          { name: 'Lights', route: 'lights' },
          { name: 'thermostat', route: 'thermostat' },
          { name: 'power', route: 'power' }
        ]}
      />
    </View>
  </Router>
)

export default connect()(App)

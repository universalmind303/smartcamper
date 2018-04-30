import React from 'react'
import { NativeRouter as Router, Route } from 'react-router-native'
import Toolbar from './src/core/toolbar'
import styled from 'styled-components'
import Footer from './src/core/footer'
import Thermostat from './src/components/thermostat'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import LightControl from './src/components/lightControl'

import { COLOR, ThemeProvider } from 'react-native-material-ui'

const client = new ApolloClient({
  uri: 'http://localhost:7777/graphql'
})
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  },
  toolbar: {
    container: {
      // height: 50
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar />
              <Route exact path="/thermostat" component={Thermostat} />
              <Route exact path="/lights" component={LightControl} />
              <Footer />
            </Container>
          </ThemeProvider>
        </Router>
      </ApolloProvider>
    )
  }
}

const View = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
const Container = styled.View`
  flex: 1;
`

const Text = styled.Text`
  color: black;
`

import React, { Component } from 'react'
import { Footer, Tab, StyledLink, StyledView } from './styles'
import { BottomNavigation } from 'react-native-material-ui'
import { StyledBottomNavigation } from './styles'
import { Link, browserHistory, withRouter } from 'react-router-native'

class FooterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { active: '' }
  }
  render() {
    const { history } = this.props
    return (
      <StyledView>
        <BottomNavigation active={this.state.active} hidden={false}>
          <BottomNavigation.Action
            key="lights"
            icon="lightbulb-outline"
            label="Lights"
            onPress={() => {
              this.setState({ active: 'lights' })
              history.push('/lights')
            }}
          />
          <BottomNavigation.Action
            key="thermostat"
            icon="ac-unit"
            label="Climate Control"
            onPress={() => {
              this.setState({ active: 'thermostat' })
              history.push('/thermostat')
            }}
          />
          <BottomNavigation.Action
            key="battery"
            icon="battery-std"
            label="Battery Monitor"
            onPress={() => this.setState({ active: 'battery' })}
          />
        </BottomNavigation>
      </StyledView>
    )
  }
}
export default withRouter(FooterComponent)

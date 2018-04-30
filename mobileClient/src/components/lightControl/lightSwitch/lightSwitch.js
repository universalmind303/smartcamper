import React, { Component } from 'react'
import { StyledTouchableOpacity, StyledText, StyledView, StyledSwitch } from './styles'
import { Divider } from 'react-native-material-ui';

class LightSwitch extends Component {
  constructor(props) {
    super(props)

    this.state = { value: props.value }

    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange() {
    this.setState({
      value: !this.state.value
    })
  }

  render() {
    const { text, action } = this.props
    const { value } = this.state

    return (
      <StyledView>
        <StyledText>{text}</StyledText>
        <StyledSwitch onValueChange={this.handleValueChange} value={value} />
        <Divider />
      </StyledView>
    )
  }
}
export default LightSwitch

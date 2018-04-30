import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Slider from './slider'
import { StyledView, StyledText, StyledTextContainer } from './styles'

class Thermostat extends PureComponent {
  handleValueChange(value) {
    console.log(Math.trunc(value))
  }

  render() {
    return (
      <StyledView>
        <Slider />
      </StyledView>
    )
  }
}
export default Thermostat

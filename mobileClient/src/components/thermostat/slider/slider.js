import React from 'react'
import { StyledSlider } from './styles'

const Slider = props => (
  <StyledSlider 
    onValueChange={temperature => console.log('mutate temperature here')}
    minimumValue={50} 
    maximumValue={100} 
  />
)

export default Slider

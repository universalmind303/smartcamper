import React from 'react'
import { StyledView, StyledText } from './styles'
import LightSwitch from './lightSwitch'

const LightControl = () => (
  <StyledView>
    <LightSwitch text="LivingRoom" action={x => console.log('toggle livingroom here')} />
    <LightSwitch text="Bathroom" action={x => console.log('toggle bathroom here')} />
    <LightSwitch text="Kitchen" action={x => console.log('toggle kitchen here')} />
    <LightSwitch text="Bedroom" action={x => console.log('toggle bedroom here')} />
    <LightSwitch text="Hallway" action={x => console.log('toggle hallway here')} />
  </StyledView>
)

export default LightControl

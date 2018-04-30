import styled from 'styled-components'
import { Link } from 'react-router-native'
import { BottomNavigation } from 'react-native-material-ui'

export const StyledView = styled.View`
  position: absolute;
  bottom: 0;
  right:0;
  width: 100%;
`
export const StyledLink = styled(Link)`


`
export const Tab = styled.Text`
  padding-top: 15;
  text-align: center;


  background-color: green;
`

export const StyledBottomNavigation = styled(BottomNavigation)`
  bottom: 0;
`
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: tomato;
  border: black;
  border-width: .5px;
  height: 50
  justify-content: center;
  align-content: center;
`

export const StyledText = styled.Text`
  padding-left: 10;
  text-align: left;
`

export const StyledView = styled.View`
  display: flex;
  /* flex:1; */
  justify-content: center;
  align-content: center;

`
export const StyledSwitch = styled.Switch``
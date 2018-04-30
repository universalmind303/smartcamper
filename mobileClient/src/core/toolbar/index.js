/* @flow */

import React from 'react'
import styled from 'styled-components'
import { ToolbarAndroid, StyleSheet } from 'react-native'

export default () => <Toolbar title="Smart Camper" titleColor="white" />

const Toolbar = styled.ToolbarAndroid`
  height: 56;
  background-color: green;
`
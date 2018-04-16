/* @flow */

import React, { PureComponent } from 'react'
import { ToolbarAndroid, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#4883da'
  }
})

const Toolbar = (): PureComponent => (
  <ToolbarAndroid
    style={styles.toolbar}
    titleColor="white"
    title="Smart Camper"
  />
)
export default Toolbar


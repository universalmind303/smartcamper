/* @flow */

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

import styles from './styles'
import { Route } from '../types'

const Footer = ({ routes }: Route[]): PureComponent => (
  <View style={styles.container}>
    {routes.map(({ name, route }: Route): PureComponent => (
      <Link key={`${name} ${route}`} style={styles.tab} to={`/${route}`}>
        <Text>{name.toUpperCase()}</Text>
      </Link>
    ))
    }
  </View>
)

export default Footer

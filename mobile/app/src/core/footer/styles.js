import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: height * 0.9,
    position: 'absolute',
  },
  tab: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    flex: 4
  }
})

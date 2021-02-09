import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 20,
    // display: 'flex',
    // justifyContent: 'space-between',
    // height: '100%',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  actions: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxInput: {
    width: Dimensions.get('window').width - 120,
    marginRight: 20,
  },
})

export default styles

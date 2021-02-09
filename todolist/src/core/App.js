import * as React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'

import Tasks from '#screens/Tasks'

import COLORS from '#utils/theme/colors'
import configureStore from './configureStore'

const {store} = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Tasks />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.snow,
  },
})

export default App

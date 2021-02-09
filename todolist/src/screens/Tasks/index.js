import * as React from 'react'
import {View, Text, ScrollView} from 'react-native'

import ItemTask from './components/ItemTask'
import ButtonAddTask from './components/ButtonAddTask'
import InputPrimary from '#components/Input/Primary'

import styles from './styles'

const Tasks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Today&#39;s tasks</Text>
        <ScrollView>
          <ItemTask />
          <ItemTask />
        </ScrollView>
      </View>
      <View style={styles.actions}>
        <View style={styles.boxInput}>
          <InputPrimary />
        </View>
        <ButtonAddTask />
      </View>
    </View>
  )
}

export default Tasks

import * as React from 'react'

import {View, TextInput, KeyboardAvoidingView, Platform} from 'react-native'

import styles from './styles'

const InputPrimary = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Write a task'
          placeholderTextColor='#c0c0c0'
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default InputPrimary

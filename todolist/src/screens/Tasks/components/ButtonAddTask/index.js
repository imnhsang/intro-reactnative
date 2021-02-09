import * as React from 'react'
import {TouchableOpacity} from 'react-native'

import styles from './styles'
import IconPlus from '#components/Svg/IconPlus'

const ButtonAddTask = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPlus width={120} height={40} />
    </TouchableOpacity>
  )
}

export default ButtonAddTask

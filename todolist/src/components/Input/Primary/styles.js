import {StyleSheet} from 'react-native'
import COLORS from '#utils/theme/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0,0,0,0.15)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  input: {
    fontSize: 14,
  },
})

export default styles

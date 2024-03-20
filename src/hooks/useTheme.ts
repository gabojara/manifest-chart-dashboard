import { useSelector } from 'react-redux'

import { colors } from 'config/theme'
import { RootState } from 'redux/store'

const useTheme = () => {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = mode === 'dark'
  const themeColors = isDarkMode ? colors['dark'] : colors['light']

  return { mode, isDarkMode, themeColors }
}

export default useTheme

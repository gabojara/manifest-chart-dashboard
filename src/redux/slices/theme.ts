import { createSlice } from '@reduxjs/toolkit'
import { ThemeState } from 'types'

const initialState: ThemeState = {
  mode: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      const mode = action.payload
        ? action.payload
        : state.mode === 'dark'
          ? 'light'
          : 'dark'
      state.mode = mode
    },
  },
})

export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer

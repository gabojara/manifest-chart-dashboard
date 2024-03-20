import { combineReducers } from 'redux'

import { themeReducer } from './slices'

const rootReducer = combineReducers({
  theme: themeReducer,
})

export { rootReducer }

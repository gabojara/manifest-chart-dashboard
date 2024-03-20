import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { rootReducer } from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serialzableCheck: false,
      immutableCheck: false,
    }),
})

export type RootState = ReturnType<typeof rootReducer>

export type Dispatch = typeof store.dispatch

const { dispatch } = store

export { store, dispatch, useSelector, useDispatch }

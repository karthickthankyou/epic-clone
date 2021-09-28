import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

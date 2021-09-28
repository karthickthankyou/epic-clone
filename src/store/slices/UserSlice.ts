/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState = {
  uid: null,
  displayName: null,
  loading: false,
  error: null,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload?.uid
      state.displayName = action.payload?.displayName
      state.loading = false
      state.error = null
    },
  },
})

export const { setUser } = UserSlice.actions

export const getUser = (state: RootState) => state.user

export default UserSlice.reducer

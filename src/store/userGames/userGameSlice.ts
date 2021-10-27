/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AsyncUserGames, UserGame, UserGameStatus } from '../../types'
import { defaultAsyncUserGames } from '../../types/static'

type UserGameType = {
  [key in UserGameStatus]: AsyncUserGames
}

const initialState: UserGameType = {
  IN_CART: defaultAsyncUserGames,
  WISHLISTED: defaultAsyncUserGames,
  PURCHASED: defaultAsyncUserGames,
  REMOVED_FROM_CART: defaultAsyncUserGames,
  REMOVED_FROM_WISHLIST: defaultAsyncUserGames,
}

const withDefaultGames = ({
  data = [],
  fulfilled = false,
  loading = false,
  error = false,
}: Partial<AsyncUserGames>): AsyncUserGames => ({
  data,
  fulfilled,
  loading,
  error,
})

const userGamesSlice = createSlice({
  name: 'userGames',
  initialState,
  reducers: {
    setCartGameIds: (state, action: PayloadAction<Partial<AsyncUserGames>>) => {
      state.IN_CART = withDefaultGames(action.payload)
    },
    setWishlistGameIds: (
      state,
      action: PayloadAction<Partial<AsyncUserGames>>
    ) => {
      state.WISHLISTED = withDefaultGames(action.payload)
    },
    setPurchasedGameIds: (
      state,
      action: PayloadAction<Partial<AsyncUserGames>>
    ) => {
      state.PURCHASED = withDefaultGames(action.payload)
    },
    setRemovedFromCartGameIds: (
      state,
      action: PayloadAction<Partial<AsyncUserGames>>
    ) => {
      state.REMOVED_FROM_CART = withDefaultGames(action.payload)
    },
    setRemovedFromWishlistGameIds: (
      state,
      action: PayloadAction<Partial<AsyncUserGames>>
    ) => {
      state.REMOVED_FROM_WISHLIST = withDefaultGames(action.payload)
    },
  },
})

// Actions
export const {
  setCartGameIds,
  setRemovedFromCartGameIds,
  setWishlistGameIds,
  setPurchasedGameIds,
} = userGamesSlice.actions

//   Reducer
export default userGamesSlice.reducer

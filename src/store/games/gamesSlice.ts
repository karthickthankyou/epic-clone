/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/types/types-external'
import { defaultAsyncGame, defaultAsyncGames } from '../../types/static'
import {
  AsyncGame,
  AsyncGames,
  Game,
  GameGenre,
  GameSection,
  SpecialSectionKey,
  UserGameStatus,
} from '../../types'
import {
  getGamePage,
  getGameSections,
  getGamesGenre,
  getSimilarGames,
  getSpecialGames,
} from './gameActions'

// Hey we need to look into the Record! to compose an object.

type GameSliceType = {
  gamePage: AsyncGame
  similarGames: AsyncGames
  genres: {
    [key in GameGenre]?: AsyncGames
  }
  sections: {
    [key in GameSection]?: AsyncGames
  }
  specialSections: {
    [key in SpecialSectionKey]?: AsyncGames
  }
  userGames: {
    [key in UserGameStatus]: AsyncGames
  }
}

const initialState: GameSliceType = {
  gamePage: defaultAsyncGame,
  similarGames: defaultAsyncGames,
  genres: {},
  sections: {},
  specialSections: {},
  userGames: {
    WISHLISTED: defaultAsyncGames,
    IN_CART: defaultAsyncGames,
    PURCHASED: defaultAsyncGames,
    REMOVED_FROM_CART: defaultAsyncGames,
    REMOVED_FROM_WISHLIST: defaultAsyncGames,
  },
}

const withDefaultGame = ({
  data = null,
  fulfilled = false,
  loading = false,
  error = false,
}: Partial<AsyncGame>): AsyncGame => ({
  data,
  fulfilled,
  loading,
  error,
})
const withDefaultGames = ({
  data = [],
  fulfilled = false,
  loading = false,
  error = false,
}: Partial<AsyncGames>): AsyncGames => ({
  data,
  fulfilled,
  loading,
  error,
})

const setGames =
  (status: UserGameStatus) =>
  (
    state: WritableDraft<GameSliceType>,
    action: PayloadAction<Partial<AsyncGames>>
  ) => {
    const data: AsyncGames = {
      loading: false,
      fulfilled: false,
      error: false,
      data: [],
      ...action.payload,
    }
    state.userGames[status as UserGameStatus] = data
  }

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setWishlistedGames: setGames('WISHLISTED'),
    setCartGames: setGames('IN_CART'),
    setPurchasedGames: setGames('PURCHASED'),
    setRemovedFromCartGames: setGames('REMOVED_FROM_CART'),
    setRemovedFromWishlistGames: setGames('REMOVED_FROM_WISHLIST'),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGamePage.pending, (state) => {
        state.gamePage = withDefaultGame({ loading: true })
      })
      .addCase(getGamePage.fulfilled, (state, action) => {
        const data = action.payload
        state.gamePage = withDefaultGame({ fulfilled: true, data })
      })
      .addCase(getGamePage.rejected, (state) => {
        state.gamePage = withDefaultGame({ error: true })
      })
    builder
      .addCase(getSimilarGames.pending, (state) => {
        state.similarGames = withDefaultGames({ loading: true })
      })
      .addCase(getSimilarGames.fulfilled, (state, action) => {
        const data = action.payload
        state.similarGames = withDefaultGames({ fulfilled: true, data })
      })
      .addCase(getSimilarGames.rejected, (state) => {
        state.similarGames = withDefaultGames({ error: true })
      })
    builder
      .addCase(getSpecialGames.pending, (state, action) => {
        const { property } = action.meta.arg
        state.specialSections[property as SpecialSectionKey] = withDefaultGames(
          { loading: true }
        )
      })
      .addCase(getSpecialGames.fulfilled, (state, action) => {
        const { property } = action.meta.arg
        const { games } = action.payload

        state.specialSections[property as SpecialSectionKey] = withDefaultGames(
          { data: games, fulfilled: true }
        )
      })
      .addCase(getSpecialGames.rejected, (state, action) => {
        const { property } = action.meta.arg
        state.specialSections[property as SpecialSectionKey] = withDefaultGames(
          { error: true }
        )
      })
    builder
      .addCase(getGamesGenre.pending, (state, action) => {
        const { property } = action.meta.arg

        state.genres[property as GameGenre] = withDefaultGames({
          loading: true,
        })
      })
      .addCase(getGamesGenre.fulfilled, (state, action) => {
        const { property } = action.meta.arg
        const { games } = action.payload
        // state.genres.Action?.data = games
        state.genres[property as GameGenre] = withDefaultGames({
          fulfilled: true,
          data: games,
        })
      })
      .addCase(getGamesGenre.rejected, (state, action) => {
        const { property } = action.meta.arg
        state.genres[property as GameGenre] = withDefaultGames({
          error: true,
        })
      })
    builder
      .addCase(getGameSections.pending, (state, action) => {
        const { property } = action.meta.arg
        state.sections[property as GameSection] = withDefaultGames({
          loading: true,
        })
      })
      .addCase(getGameSections.fulfilled, (state, action) => {
        const { property } = action.meta.arg
        const { games } = action.payload
        console.log(property, games, 'GameSection')

        state.sections[property as GameSection] = withDefaultGames({
          fulfilled: true,
          data: games,
        })
      })
      .addCase(getGameSections.rejected, (state, action) => {
        const { property } = action.meta.arg
        state.sections[property as GameSection] = withDefaultGames({
          error: true,
        })
      })
  },
})

export const {
  setWishlistedGames,
  setCartGames,
  setPurchasedGames,
  setRemovedFromCartGames,
} = gamesSlice.actions

export default gamesSlice.reducer

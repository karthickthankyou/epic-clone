import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { collections, db } from '../../config/firebase'
import { AsyncUserGames, UserGame, UserGameStatus } from '../../types'
import { useAppDispatch, useAppSelector } from '..'
import { selectUser } from '../user'
import {
  setCartGameIds,
  setPurchasedGameIds,
  setRemovedFromCartGameIds,
  setWishlistGameIds,
} from './userGameSlice'

export function useUserGameIdsListener() {
  const dispatch = useAppDispatch()
  const {
    data: { uid },
  } = useAppSelector(selectUser)

  // Setup snapshots
  const setupOnSnapshot = (
    condition: UserGameStatus,
    customAction: ActionCreatorWithPayload<Partial<AsyncUserGames>>
  ) => {
    dispatch(customAction({ loading: true }))
    const q = query(
      collection(db, collections.USER_GAMES),
      where('status', '==', condition),
      where('uid', '==', uid),
      orderBy('updatedAt', 'desc')
    )
    return onSnapshot(q, (querySnapshot) => {
      const arr: UserGame[] = []
      querySnapshot.forEach(async (doc) => {
        arr.push(doc.data() as UserGame)
      })

      dispatch(customAction({ data: arr, fulfilled: true }))
    })
  }
  useEffect(() => {
    if (uid) {
      const detachWishlistedListener = setupOnSnapshot(
        'WISHLISTED',
        setWishlistGameIds
      )
      const detachInCartListener = setupOnSnapshot('IN_CART', setCartGameIds)
      const detachRemovedFromCartListener = setupOnSnapshot(
        'REMOVED_FROM_CART',
        setRemovedFromCartGameIds
      )
      const detachPurchasedListener = setupOnSnapshot(
        'PURCHASED',
        setPurchasedGameIds
      )

      return () => {
        detachWishlistedListener()
        detachInCartListener()
        detachPurchasedListener()
        detachRemovedFromCartListener()
      }
    }
    return undefined
  }, [uid])

  return undefined
}

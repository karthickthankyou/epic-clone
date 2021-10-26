import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useAppDispatch } from '..'
import { setUser } from './userSlice'

export function useUserListener() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user))
    })
    return unsubscribe
  }, [])
}

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useForgetAfterSometime = (): [
  string,
  Dispatch<SetStateAction<string>>
] => {
  const [selected, setSelected] = useState('')
  console.log('Running use Effect', selected, 'outside useEffect')

  useEffect(() => {
    const timerId = setTimeout(() => setSelected(''), 3000)
    console.log('Running use Effect', selected)

    return () => {
      clearTimeout(timerId)
    }
  }, [selected])
  return [selected, setSelected]
}

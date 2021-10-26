/* eslint-disable no-plusplus */
import slugify from 'slugify'

import {
  AsyncGame,
  AsyncGames,
  AsyncUserGames,
  Game,
  GameGenre,
  GameSection,
  Platform,
  SimilarGame,
  UserGameStatus,
} from '../types'

export const CAROUSEL_DURATION = 50
export interface ICounter {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export const fixedTwoDec = (num: number) => num.toFixed(2)

export const discountCalc = (disc = 0, price: number) =>
  +(price - (price * disc) / 100).toFixed(2)

export const withCurrency = (price: number) => `₹${price.toFixed(2)}`

export const calculateTimeLeft = (date: string): ICounter => {
  const diff = new Date(date).getTime() - new Date().getTime()
  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
    minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0'),
    seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
  }
}

export const Timer = (callback: Function, delay: number) => {
  let timerId: number
  let start: number
  let remaining = delay

  const pause = () => {
    clearTimeout(timerId)
    remaining -= Date.now() - start
  }

  const clear = () => {
    clearTimeout(timerId)
  }

  const resume = () => {
    start = Date.now()
    clearTimeout(timerId)
    timerId = setTimeout(callback, remaining)
  }

  resume()
  return { pause, resume, clear }
}

export const getPaginationNumbers = (current: number, total: number) => {
  if (total === 1) return []
  const items: number[] = []
  let itemsComplete: (number | '<' | '>' | '...')[] = []

  const validate = (num: number): boolean =>
    num > 0 && num <= total && !items.includes(num)

  // Always have 1
  items.push(1)

  const getFillerStart = () => {
    if (current === 1) return current + 1
    if (current === total) return total - 1
    return current - 1
  }

  const fillerStart = getFillerStart()
  // current === 1 ? current + 1 : current === total ? total - 2 : current - 1

  for (let i = fillerStart; i <= fillerStart + 2; i++)
    if (validate(i)) items.push(i)

  if (validate(total)) items.push(total)

  // Insert ...
  const dotsIndex = []
  for (let i = 1; i < items.length; i++) {
    const diff: number = items[+i] - items[i - 1]
    if (diff !== 1) {
      dotsIndex.push(dotsIndex.length + i)
    }
  }
  itemsComplete = items.slice()
  for (let i = 0; i < dotsIndex.length; i++) {
    itemsComplete.splice(dotsIndex[+i], 0, '...')
  }

  // Insert arrows
  if (current !== 1) itemsComplete.unshift('<')
  if (current !== total) itemsComplete.push('>')

  const result: { key: number; item: typeof itemsComplete[number] }[] = []

  itemsComplete.forEach((item, index) => {
    result.push({ key: index, item })
  })

  return result
}

export const getImageUrl = (id: string) => {
  const imageUrl = `https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F${id}.jpg?alt=media`
  const subImageUrl = `https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F${id}.jpg?alt=media`
  return { imageUrl, subImageUrl }
}

export const getScoreColor = (score: number) => {
  if (score > 90) return 'border-2 border-white'
  if (score > 80) return 'border-2 border-gray-200'
  if (score > 70) return 'border-2 border-gray-300 '
  if (score > 60) return 'border-2 border-gray-500 '
  if (score > 50) return 'border-2 border-gray-600 '
  return 'border-2 border-gray-700 '
  //   if (score > 20) return 'border-2 border-red-300'
}

export const processGameIdsForSimilarItems = (
  gameIds: SimilarGame[]
): Game['id'][] =>
  gameIds.slice(0, 10).map((item) => item.id.toString().padStart(3, '0'))

export const findPercentage = (num: number) => Math.round(num * 100)

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const soloPaths = ['/signin', '/signup', '/forgotpassword']

export const slug = (text: string) => slugify(text, { lower: true })

export const addOrRemoveItem = <T extends GameGenre | Platform | GameSection>(
  arr: T[],
  item: T
) =>
  arr.includes(item)
    ? arr.filter((eventItem) => eventItem !== item)
    : [...arr, item]

export const readable = (str: string) => str.split('-').join(' ')

export const getStatus = (
  gameId: string,
  wishlistIds: AsyncUserGames,
  cartIds: AsyncUserGames,
  purchasedIds: AsyncUserGames
): UserGameStatus | undefined => {
  if (wishlistIds.data.some((game) => game.gameId === gameId))
    return 'WISHLISTED'
  if (cartIds.data.some((game) => game.gameId === gameId)) return 'IN_CART'
  if (purchasedIds.data.some((game) => game.gameId === gameId))
    return 'PURCHASED'
  return undefined
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasOwnProperty = (object: any, property: any) =>
  Object.prototype.hasOwnProperty.call(object, property)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOfType = <T>(value: any): value is T => true

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isItAsyncGames = (obj: any): obj is AsyncGames => true
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isItAsyncGame = (obj: any): obj is AsyncGame => true

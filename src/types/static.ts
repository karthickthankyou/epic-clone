import { Game } from '.'

export const sampleGame: Game = {
  id: '92',
  title: 'Cyber Punk',
  tags: ['Action'],
  imageUrl: '',
  subImageUrl: '',
  publisherId: 'Some production company',
  price: 10,
  discount: 10,
}

export const ROUTES = {
  SIGNIN: '/signin',
  LIBRARY: '/library',
  SIGNUP: '/signup',
  GAME: '/game/:id',
  BROWSE: '/browse',
}

export const genres: Game['tags'] = [
  'Action',
  'Adventure',
  'Indie',
  'RPG',
  'Strategy',
  'OpenWorld',
  'Shooter',
  'Puzzle',
  'FirstPerson',
  'Narration',
  'Simulation',
  'Casual',
  'TurnBased',
  'Exploration',
  'Horror',
  'Platformer',
  'Party',
  'Survival',
  'Trivia',
  'CityBuilder',
  'Stealth',
  'Fighting',
  'Comedy',
  'ActionAdventure',
  'Racing',
  'RogueLite',
  'CardGame',
  'Sports',
]
export const platforms = ['Windows', 'Mac OS']

export const events = ['RECENTLY_UPDATED', 'HIGHEST_DISCOUNT', 'TOP_SELLER']

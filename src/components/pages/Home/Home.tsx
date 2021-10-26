import { useAppSelector } from 'src/store'
import {
  selectActionGames,
  selectAdventureGames,
  selectHighestDiscounts,
  selectNarrationGames,
  selectPuzzleGames,
  // selectAnticipatedBy,
  // selectHoursToBeat,
  // selectUnitsSold,
  // selectHoursPlayed,
  selectWishlistGames,
  selectCartGames,
} from 'src/store/games'
import { selectUser } from 'src/store/user'
import { selectCartGameIds, selectWishlistGameIds } from 'src/store/userGames'

export interface IHomeProps {}

const Home = () => {
  const cart = useAppSelector(selectCartGames)
  const wishlist = useAppSelector(selectWishlistGames)
  const highestDiscoutsEver = useAppSelector(selectHighestDiscounts)
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cartIds = useAppSelector(selectCartGameIds)
  const actionGames = useAppSelector(selectActionGames)
  const adventureGames = useAppSelector(selectAdventureGames)
  const puzzleGames = useAppSelector(selectPuzzleGames)
  const narrationGames = useAppSelector(selectNarrationGames)

  const user = useAppSelector(selectUser)
  return (
    <div>
      Hello, This is <span className="font-black"> Home </span>component!
    </div>
  )
}

export default Home

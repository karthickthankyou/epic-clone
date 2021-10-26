import { useAppSelector } from 'src/store'
import { selectWishlistGames } from 'src/store/games'
import { selectWishlistGameIds } from 'src/store/userGames'

export interface IWishlistProps {}

const Wishlist = () => {
  const { data: wishlist } = useAppSelector(selectWishlistGames)
  const { data: wishlistIds } = useAppSelector(selectWishlistGameIds)
  return (
    <div>
      Hello, This is <span className="font-black"> Wishlist </span>component!
    </div>
  )
}

export default Wishlist

import { useAppSelector } from 'src/store'
import { selectBrowseGamesWithWish } from 'src/store/browseGames'

export interface IBrowseGamesProps {}

const BrowseGames = () => {
  const { data: games } = useAppSelector(selectBrowseGamesWithWish)
  return (
    <div>
      Hello, This is <span className="font-black"> BrowseGames </span>component!
    </div>
  )
}

export default BrowseGames

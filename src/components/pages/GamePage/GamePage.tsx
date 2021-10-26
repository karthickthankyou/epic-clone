import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/store'
import {
  selectGamePage,
  selectGamePageSimilarGames,
  useGetGamePage,
} from 'src/store/games'

export interface IGamePageProps {}

const GamePage = () => {
  const { id } = useParams<{ id: string }>()
  useGetGamePage(id)

  const gamePage = useAppSelector(selectGamePage)

  const similarGames = useAppSelector(selectGamePageSimilarGames)
  return (
    <div>
      Hello, This is <span className="font-black"> GamePage </span>component!
    </div>
  )
}

export default GamePage

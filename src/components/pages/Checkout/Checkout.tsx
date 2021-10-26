import { useAppSelector } from 'src/store'
import { selectCartGames } from 'src/store/games'

export interface ICheckoutProps {}

const Checkout = () => {
  const { data: gamesInCart } = useAppSelector(selectCartGames)
  return (
    <div>
      Hello, This is <span className="font-black"> Checkout </span>component!
    </div>
  )
}

export default Checkout

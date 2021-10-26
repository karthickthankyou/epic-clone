import { useAppSelector } from 'src/store'
import { selectUser } from 'src/store/user'

export interface ISigninProps {}

const Signin = () => {
  const {
    data: { uid },
    loading,
    error,
  } = useAppSelector(selectUser)
  return (
    <div>
      Hello, This is <span className="font-black"> Signin </span>component!
    </div>
  )
}

export default Signin

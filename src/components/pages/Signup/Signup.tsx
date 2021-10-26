import { useAppSelector } from 'src/store'
import { selectUser } from 'src/store/user'

export interface ISignupProps {}

const Signup = () => {
  const {
    data: { uid },
    loading,
    error,
  } = useAppSelector(selectUser)
  return (
    <div>
      Hello, This is <span className="font-black"> Signup </span>component!
    </div>
  )
}

export default Signup

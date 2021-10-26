import { useAppSelector } from 'src/store'
import { selectUser } from 'src/store/user'

export interface IForgotPasswordProps {}

const ForgotPassword = () => {
  const {
    data: { uid },
    loading,
    error,
    fulfilled,
  } = useAppSelector(selectUser)
  return (
    <div>
      Hello, This is <span className="font-black"> ForgotPassword </span>
      component!
    </div>
  )
}

export default ForgotPassword

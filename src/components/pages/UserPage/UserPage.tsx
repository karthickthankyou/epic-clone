import { useParams } from 'react-router-dom'

export interface IUserPageProps {}

const UserPage = () => {
  const { uid } = useParams<{ uid: string }>()
  return (
    <div>
      Hello, This is <span className="font-black"> UserPage </span>component!
    </div>
  )
}

export default UserPage

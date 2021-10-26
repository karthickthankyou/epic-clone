import { useAppSelector } from 'src/store'
import { selectUser } from 'src/store/user'

export interface ILibraryProps {}

const Library = () => {
  const {
    data: { uid },
  } = useAppSelector(selectUser)
  return (
    <div>
      Hello, This is <span className="font-black"> Library </span>component!
    </div>
  )
}

export default Library

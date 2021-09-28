import SampleComp from './components/SampleComp'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { getUser, setUser } from './store/slices/UserSlice'

function App() {
  const dispatch = useAppDispatch()
  const updateUser = () => {
    dispatch(setUser({ uid: '123', displayName: 'Karthick' }))
  }
  const user = useAppSelector(getUser)
  return (
    <div className="p-5">
      Hello World!
      <br />
      <br />
      <button
        type="button"
        onClick={updateUser}
        className="px-2 py-1 mb-2 border rounded-sm"
      >
        Set User
      </button>
      <br />
      <SampleComp />
      <div>
        uid: <span>{user.uid}</span>
        <br />
        displayName: <span>{user.displayName}</span>
      </div>
    </div>
  )
}

export default App

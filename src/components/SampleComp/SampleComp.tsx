import { useAppDispatch } from '../../store'
import { setUser } from '../../store/user'

export interface ISampleCompProps {}

const SampleComp = () => {
  const dispatch = useAppDispatch()
  const updateUser = () => {
    dispatch(
      setUser({
        uid: '&!&n@',
        displayName: '&@OP@*&^* @&*^*&@',
      })
    )
  }
  return (
    <div className="p-5 bg-red-400">
      Hello, This is <span className="font-black"> the polluting </span>
      component!
      <br />
      <button
        type="button"
        onClick={updateUser}
        className="px-2 py-1 mt-1 bg-white rounded-sm"
      >
        Pollute the store
      </button>
    </div>
  )
}

export default SampleComp

import SampleAtom from '@atoms/SampleAtom'

export interface ISampleCompProps {}

const SampleComp = () => (
  <div className="p-5 bg-red-400">
    🛬 Hello, This is SampleComp component! 🛫
    <SampleAtom />
  </div>
)

export default SampleComp

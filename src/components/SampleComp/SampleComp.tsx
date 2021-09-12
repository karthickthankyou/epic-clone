import SampleAtom from '@atoms/SampleAtom'

export interface ISampleCompProps {}

const SampleComp = ({}: ISampleCompProps) => {
  return (
    <div>
      🛬 Hello, This is SampleComp component! 🛫
      <SampleAtom />
    </div>
  )
}

export default SampleComp

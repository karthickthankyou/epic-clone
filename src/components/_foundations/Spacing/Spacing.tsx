export interface ISpacingProps {}

const Spacing = () => (
  <div className="container mx-auto">
    <div className=" min-w-max">
      <h1 className="mb-3 text-3xl font-thin">Spacing</h1>
      {[
        ['w-0', '0rem'],
        ['w-0.5', '0.125rem'],
        ['w-1', '.25rem'],
        ['w-2', '.5rem'],
        ['w-3', '1rem'],
        ['w-4', '1.5rem'],
        ['w-5', '2rem'],
        ['w-6', '3rem'],
        ['w-7', '4rem'],
        ['w-8', '5rem'],
        ['w-9', '6rem'],
        ['w-10', '8rem'],
        ['w-11', '10rem'],
        ['w-12', '12rem'],
        ['w-13', '16rem'],
        ['w-14', '20rem'],
        ['w-15', '24rem'],
        ['w-16', '32rem'],
      ].map(([size, text]) => (
        <div className="flex items-center my-2 -ml-6">
          <div className="w-6 px-2 text-gray-800">{size.split('-')[1]}</div>
          <div className={`h-3 ${size} bg-primary-500 rounded-sm`} />
          <div className="w-6 px-3 text-sm text-gray-600">{text}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Spacing

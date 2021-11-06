export interface ISkeletonProps {
  shape?: 'circle' | 'rectangle'
  height?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  width?: '1/2' | '2/3' | '3/4' | '4/5' | '5/6' | 'full'
  classes?: string
}

const Skeleton = ({
  shape = 'rectangle',
  height = '2',
  width = 'full',
  classes,
}: ISkeletonProps) => {
  const sizeClasses = {
    '1': ['h-3', 'w-3'],
    '2': ['h-4', 'w-4'],
    '3': ['h-5', 'w-5'],
    '4': ['h-6', 'w-6'],
    '5': ['h-7', 'w-7'],
    '6': ['h-8', 'w-8'],
    '7': ['h-10', 'w-10'],
    '8': ['h-12', 'w-12'],
    '9': ['h-14', 'w-14'],
    '10': ['h-16', 'w-16'],
  }
  const widthClasses = {
    '1/2': 'w-1/2',
    '2/3': 'w-2/3',
    '3/4': 'w-3/4',
    '4/5': 'w-4/5',
    '5/6': 'w-5/6',
    full: 'w-full',
  }

  const dimensionClasses =
    shape === 'circle'
      ? `rounded-full ${sizeClasses[height][1]} ${sizeClasses[height][0]} `
      : `rounded-lg ${widthClasses[width]} ${sizeClasses[height][0]} `

  return (
    <div
      className={`bg-gray-700 my-2 animate-pulse ${dimensionClasses} ${classes}`}
    />
  )
}

export default Skeleton

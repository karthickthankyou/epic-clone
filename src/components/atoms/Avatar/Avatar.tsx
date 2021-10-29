export interface IAvatarProps {
  src: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'full'
  ring?: boolean
  shadow?: boolean
}

const Avatar = ({
  src,
  size = 'md',
  rounded = 'full',
  ring = false,
  shadow = false,
}: IAvatarProps) => {
  const roundedClass = {
    none: 'rounded-none',
    xs: 'rounded-xs',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-3xl',
    full: 'rounded-full',
  }
  const sizeClass = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  }
  const ringClass = ring && 'border border-white border-opacity-70'
  const shadowClass = shadow && 'shadow'

  return (
    <img
      src={src}
      alt="avatar"
      className={` object-cover object-center ${roundedClass[rounded]} ${sizeClass[size]} ${ringClass} ${shadowClass}`}
    />
  )
}

export default Avatar

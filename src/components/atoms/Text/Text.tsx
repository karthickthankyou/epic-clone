import { ReactElement } from 'react'

export interface ITextProps {
  children: string | ReactElement
  size?: 'xs' | 'sm' | 'md' | 'lg'
  muted?: boolean
  textType?: 'p' | 'span'
  uppercase?: boolean
  clamp?: 'none' | '1' | '2' | '3' | '4' | '5' | '6'
  classes?: string
}

const Text = ({
  textType = 'p',
  size = 'md',
  muted = false,
  clamp = 'none',
  uppercase = false,
  children,
}: ITextProps) => {
  const TextType = textType
  const mutedClass = muted && 'text-gray-300'
  const sizes = {
    xs: 'text-xs ',
    sm: 'text-sm ',
    md: 'text-md ',
    lg: 'text-lg ',
  }
  const clampClasses = {
    none: 'line-clamp-none',
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
    6: 'line-clamp-6',
  }

  return (
    <TextType
      className={`${mutedClass} ${uppercase && 'uppercase'} ${
        clampClasses[clamp]
      }  ${sizes[size]}`}
    >
      {children}
    </TextType>
  )
}

export default Text

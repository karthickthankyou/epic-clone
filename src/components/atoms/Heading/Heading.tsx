import { ReactElement } from 'react'

export interface IHeadingProps {
  children: string | ReactElement
  variant?: 'heading-1' | 'heading-2' | 'heading-3'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  headerType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  classes?: string
}

const Heading = ({
  children,
  variant = 'heading-1',
  headerType = 'h1',
  weight = 'medium',
  classes = '',
}: IHeadingProps) => {
  const variantClasses = {
    'heading-1': 'text-2xl mb-3 ',
    'heading-2': 'text-xl mb-3 ',
    'heading-3': 'text-lg mb-2 ',
  }

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }
  const Header = headerType

  return (
    <Header
      className={`${variantClasses[variant]} ${weightClasses[weight]} ${classes}`}
    >
      {children}
    </Header>
  )
}

export default Heading

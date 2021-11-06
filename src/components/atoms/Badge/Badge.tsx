export interface IBadgeProps {
  badgeText: string
  color?: 'primary' | 'gray' | 'red' | 'green'
  classes?: string
}

const Badge = ({ badgeText, color = 'primary', classes }: IBadgeProps) => {
  const colors = {
    primary: 'bg-primary-700 text-primary-200 border border-primary-600',
    gray: 'bg-gray-700 text-gray-200 border border-gray-600',
    red: 'bg-red-700 text-red-200 border border-red-600',
    green: 'bg-green-700 text-green-200 border border-green-600',
  }
  return (
    <span
      className={`${classes} ${colors[color]} inline-block px-1 py-0.5 leading-none text-xs uppercase rounded-sm`}
    >
      {badgeText}
    </span>
  )
}

export default Badge

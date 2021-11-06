import React from 'react'
import { Link } from 'react-router-dom'

export interface INavIconProps {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  count?: number
  linkTo?: string
  ariaLabel?: string
  classes?: string
}

const NavIcon = ({
  IconComponent,
  count = 0,
  linkTo = '#',
  ariaLabel = 'icon',
  classes,
}: INavIconProps) => (
  <Link
    aria-label={ariaLabel}
    className={`flex items-start px-2 ${classes}`}
    to={linkTo}
  >
    <IconComponent className="w-4 h-4 text-white" />
    <div className="absolute ml-2.5">
      {count ? (
        <div className="flex items-center w-3 h-3 p-0.5 text-xs font-bold leading-none border rounded-full border-primary-500 bg-primary-600">
          {count > 9 ? '9+' : count}
        </div>
      ) : null}
    </div>
  </Link>
)

export default NavIcon

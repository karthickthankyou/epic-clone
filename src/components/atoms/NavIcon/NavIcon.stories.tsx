import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationReg } from 'src/assets'
import NavIcon from './NavIcon'

export default {
  title: 'atoms/NavIcon',
  component: NavIcon,
} as ComponentMeta<typeof NavIcon>

const Template: ComponentStory<typeof NavIcon> = ({
  IconComponent,
  count,
  linkTo,
  ariaLabel,
}) => (
  <div className="flex items-center justify-center h-screen ">
    <NavIcon
      IconComponent={IconComponent}
      count={count}
      linkTo={linkTo}
      ariaLabel={ariaLabel}
    />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  IconComponent: NotificationReg,
  count: 4,
  linkTo: '/notifications',
  ariaLabel: 'notification',
}

export const ZeroCount = Template.bind({})
ZeroCount.args = {
  IconComponent: NotificationReg,
  linkTo: '/notifications',
  ariaLabel: 'notification',
}

export const AboveNine = Template.bind({})
AboveNine.args = {
  IconComponent: NotificationReg,
  count: 12,
  linkTo: '/notifications',
  ariaLabel: 'notification',
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = ({
  badgeText,
  color,
  classes,
}) => (
  <div className="flex items-center justify-center h-screen">
    <Badge badgeText={badgeText} color={color} classes={classes} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  badgeText: 'Primary',
  color: 'primary',
}

export const Gray = Template.bind({})
Gray.args = {
  badgeText: 'Gray',
  color: 'gray',
}

export const Red = Template.bind({})
Red.args = {
  badgeText: 'Red',
  color: 'red',
}

export const Green = Template.bind({})
Green.args = {
  badgeText: 'Green',
  color: 'green',
}

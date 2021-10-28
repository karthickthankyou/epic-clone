import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShadowsDarkMode from './ShadowsDarkMode'

export default {
  title: '_foundations/4. Shadows/ShadowsDarkMode',
  component: ShadowsDarkMode,
} as ComponentMeta<typeof ShadowsDarkMode>

const Template: ComponentStory<typeof ShadowsDarkMode> = (args) => (
  <ShadowsDarkMode />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

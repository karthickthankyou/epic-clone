import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SampleComp from './SampleComp'

export default {
  title: 'components/SampleComp',
  component: SampleComp,
} as ComponentMeta<typeof SampleComp>

const Template: ComponentStory<typeof SampleComp> = (args) => <SampleComp />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({
  variant,
  children,
  weight,
}) => (
  <div>
    <hr className="border-gray-600" />
    <Heading headerType="h3" variant={variant} weight={weight}>
      {children}
    </Heading>
    <hr className="border-gray-600" />
  </div>
)

export const Heading1Normal = Template.bind({})
Heading1Normal.args = {
  weight: 'normal',
  variant: 'heading-1',
  children: 'Heading 1',
}
export const Heading1 = Template.bind({})
Heading1.args = {
  weight: 'medium',
  variant: 'heading-1',
  children: 'Heading 1',
}
export const Heading1SemiBold = Template.bind({})
Heading1SemiBold.args = {
  weight: 'semibold',
  variant: 'heading-1',
  children: 'Heading 1',
}
export const Heading1Bold = Template.bind({})
Heading1Bold.args = {
  weight: 'bold',
  variant: 'heading-1',
  children: 'Heading 1',
}
export const Heading1ExtraBold = Template.bind({})
Heading1ExtraBold.args = {
  weight: 'extrabold',
  variant: 'heading-1',
  children: 'Heading 1',
}
export const Heading2Normal = Template.bind({})
Heading2Normal.args = {
  weight: 'normal',
  variant: 'heading-2',
  children: 'Heading 2',
  headerType: 'h2',
}

export const Heading2ExtraBold = Template.bind({})
Heading2ExtraBold.args = {
  weight: 'extrabold',
  variant: 'heading-2',
  children: 'Heading 2',
  headerType: 'h2',
}
export const Heading3Normal = Template.bind({})
Heading3Normal.args = {
  weight: 'normal',
  variant: 'heading-3',
  children: 'Heading 3',
  headerType: 'h3',
}

export const Heading3ExtraBold = Template.bind({})
Heading3ExtraBold.args = {
  weight: 'extrabold',
  variant: 'heading-3',
  children: 'Heading 3',
  headerType: 'h3',
}

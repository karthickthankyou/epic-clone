import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Skeleton from './Skeleton'

export default {
  title: 'atoms/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = ({
  shape,
  height,
  width,
}) => <Skeleton shape={shape} height={height} width={width} />
const TemplateExample: ComponentStory<typeof Skeleton> = ({
  shape,
  height,
  width,
}) => (
  <div className="flex items-center text-gray-500">
    <Skeleton shape="circle" height="6" />
    <div className="flex-grow ml-2">
      <Skeleton shape="rectangle" height="1" />
      <Skeleton shape="rectangle" height="1" />
      <Skeleton shape="rectangle" height="1" width="2/3" />
    </div>
  </div>
)
const TemplateExample2: ComponentStory<typeof Skeleton> = ({
  shape,
  height,
  width,
}) => (
  <>
    <Skeleton shape="rectangle" height="8" />
    <div className="flex">
      <Skeleton shape="circle" height="5" />
      <div className="flex-grow ml-2">
        <Skeleton shape="rectangle" height="1" />
        <Skeleton shape="rectangle" height="1" />
        <Skeleton shape="rectangle" height="1" width="1/2" />
      </div>
    </div>
  </>
)

export const DefaultRectangle = Template.bind({})
DefaultRectangle.args = {
  shape: 'rectangle',
}
export const DefaultCircle = Template.bind({})
DefaultCircle.args = {
  shape: 'circle',
}
export const Circle4 = Template.bind({})
Circle4.args = {
  shape: 'circle',
  height: '4',
}
export const Circle6 = Template.bind({})
Circle6.args = {
  shape: 'circle',
  height: '6',
}
export const Circle8 = Template.bind({})
Circle8.args = {
  shape: 'circle',
  height: '8',
}
export const Example1 = TemplateExample.bind({})
export const Example2 = TemplateExample2.bind({})

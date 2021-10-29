import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './Text'

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = ({
  size,
  muted,
  textType,
  clamp,
  uppercase,
  children,
}) => (
  <div className="flex items-center justify-center h-screen">
    <div className="max-w-sm px-4 py-3 bg-gray-800 border border-gray-700 rounded shadow-lg ">
      <Text
        size={size}
        clamp={clamp}
        muted={muted}
        uppercase={uppercase}
        textType={textType}
      >
        {children}
      </Text>
    </div>
  </div>
)

export const TextDefault = Template.bind({})
TextDefault.args = {
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, accusantium amet hic architecto.',
}

export const TextXS = Template.bind({})
TextXS.args = {
  size: 'xs',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, accusantium amet hic architecto.',
}
export const TextSM = Template.bind({})
TextSM.args = {
  size: 'sm',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, accusantium amet hic architecto.',
}
export const TextSMSpan = Template.bind({})
TextSMSpan.args = {
  size: 'sm',
  textType: 'span',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, accusantium amet hic architecto.',
}
export const TextSMSpanMuted = Template.bind({})
TextSMSpanMuted.args = {
  size: 'sm',
  textType: 'span',
  muted: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, accusantium amet hic architecto.',
}
export const TextMD = Template.bind({})
TextMD.args = {
  size: 'md',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, accusantium amet hic architecto.',
}

export const TextLG = Template.bind({})
TextLG.args = {
  size: 'lg',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? accusantium amet hic architecto.',
}

export const TextLGClamp6 = Template.bind({})
TextLGClamp6.args = {
  size: 'lg',
  clamp: '6',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? accusantium amet hic architecto.',
}
export const TextLGClamp3 = Template.bind({})
TextLGClamp3.args = {
  size: 'lg',
  clamp: '3',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? accusantium amet hic architecto.',
}
export const TextLGClamp1 = Template.bind({})
TextLGClamp1.args = {
  size: 'lg',
  clamp: '1',
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? Facere sed expedita illo perspiciatis labore optio libero eius vitae, Aliquid, fuga veniam eos accusamus vero fugiat, ab iure dignissimos hic corrupti quibusdam rerum reiciendis nobis dolorem illum? accusantium amet hic architecto.',
}
export const TextLGUppercase = Template.bind({})
TextLGUppercase.args = {
  size: 'lg',
  clamp: '1',
  uppercase: true,
  children: 'Lorem ipsum!',
}

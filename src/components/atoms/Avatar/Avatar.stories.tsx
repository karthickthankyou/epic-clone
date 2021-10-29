import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from './Avatar'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = ({
  src,
  size,
  rounded,
  ring,
  shadow,
}) => (
  <div className="flex items-center justify-center h-screen">
    <Avatar
      size={size}
      src={src}
      rounded={rounded}
      ring={ring}
      shadow={shadow}
    />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
}

export const XS = Template.bind({})
XS.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'xs',
}
export const SM = Template.bind({})
SM.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'sm',
}
export const MD = Template.bind({})
MD.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'md',
}

export const LG = Template.bind({})
LG.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
}

export const LGRing = Template.bind({})
LGRing.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
  ring: true,
}

export const LGRingRoundedNone = Template.bind({})
LGRingRoundedNone.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
  ring: true,
  rounded: 'none',
}

export const LGRingRoundedSM = Template.bind({})
LGRingRoundedSM.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
  ring: true,
  rounded: 'sm',
}
export const LGRingRoundedMD = Template.bind({})
LGRingRoundedMD.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
  ring: true,
  rounded: 'md',
}

export const LGRingRoundedLG = Template.bind({})
LGRingRoundedLG.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
  ring: true,
  rounded: 'lg',
}

export const LGRingRoundedLGShadow = Template.bind({})
LGRingRoundedLGShadow.args = {
  src: 'https://source.unsplash.com/1600x900/?portrait',
  size: 'lg',
  ring: true,
  rounded: 'lg',
  shadow: true,
}

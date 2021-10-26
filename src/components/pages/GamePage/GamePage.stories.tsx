import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GamePage from './GamePage'

export default {
  title: 'pages/GamePage',
  component: GamePage,
} as ComponentMeta<typeof GamePage>

const Template: ComponentStory<typeof GamePage> = (args) => <GamePage />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

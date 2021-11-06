import { addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import yourTheme from './EpicTheme'
import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

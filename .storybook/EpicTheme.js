import { create } from '@storybook/theming'

const gray50 = 'hsl(210, 12%, 95%)'
const gray100 = 'hsl(210, 12%, 90%)'
const gray200 = 'hsl(210, 12%, 80%)'
const gray300 = 'hsl(210, 12%, 70%)'
const gray400 = 'hsl(210, 12%, 60%)'
const gray500 = 'hsl(210, 12%, 49%)'
const gray600 = 'hsl(210, 12%, 39%)'
const gray700 = 'hsl(210, 12%, 28%)'
const gray800 = 'hsl(210, 12%, 16%)'
const gray900 = 'hsl(210, 12%, 10%)'

const blue500 = 'hsl(210, 100%, 49%)'
const blue600 = 'hsl(210, 100%, 39%)'

export default create({
  //   base: 'dark',

  colorPrimary: blue500,
  colorSecondary: blue600,

  // Text

  //   // UI
  appBg: gray900,
  appContentBg: gray800,
  appBorderColor: gray700,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //   // Text colors
  textColor: 'white',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: gray200,
  barSelectedColor: gray50,
  barBg: gray700,

  // Form colors
  inputBg: gray700,
  inputBorder: gray600,
  inputTextColor: gray100,
  inputBorderRadius: 4,

  brandTitle: 'Epic Clone Designbook',
  brandUrl: 'https://iamkarthick.com',
  //   brandImage: 'https://place-hold.it/350x150',
})

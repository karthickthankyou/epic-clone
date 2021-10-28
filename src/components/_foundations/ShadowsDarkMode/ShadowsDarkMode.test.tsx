import React from 'react'
import { render } from '@testing-library/react'
import ShadowsDarkMode from './ShadowsDarkMode'

describe('ShadowsDarkMode Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ShadowsDarkMode />)
    expect(asFragment()).toMatchSnapshot()
  })
})

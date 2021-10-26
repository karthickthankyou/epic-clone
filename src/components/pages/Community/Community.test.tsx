import React from 'react'
import { render } from '@testing-library/react'
import Community from './Community'

describe('Community Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Community />)
    expect(asFragment()).toMatchSnapshot()
  })
})

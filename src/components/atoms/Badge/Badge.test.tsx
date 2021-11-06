import React from 'react'
import { render } from '@testing-library/react'
import Badge from './Badge'

describe('Badge Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Badge badgeText="Hello" />)
    expect(asFragment()).toMatchSnapshot()
  })
})

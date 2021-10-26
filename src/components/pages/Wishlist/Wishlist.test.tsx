import React from 'react'
import { render } from '@testing-library/react'
import Wishlist from './Wishlist'

describe('Wishlist Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Wishlist />)
    expect(asFragment()).toMatchSnapshot()
  })
})

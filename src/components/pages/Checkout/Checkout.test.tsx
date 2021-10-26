import React from 'react'
import { render } from '@testing-library/react'
import Checkout from './Checkout'

describe('Checkout Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Checkout />)
    expect(asFragment()).toMatchSnapshot()
  })
})

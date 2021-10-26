import React from 'react'
import { render } from '@testing-library/react'
import CancelPayment from './CancelPayment'

describe('CancelPayment Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CancelPayment />)
    expect(asFragment()).toMatchSnapshot()
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import ForgotPassword from './ForgotPassword'

describe('ForgotPassword Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ForgotPassword />)
    expect(asFragment()).toMatchSnapshot()
  })
})

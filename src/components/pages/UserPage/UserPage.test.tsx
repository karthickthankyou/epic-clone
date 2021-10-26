import React from 'react'
import { render } from '@testing-library/react'
import UserPage from './UserPage'

describe('UserPage Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<UserPage />)
    expect(asFragment()).toMatchSnapshot()
  })
})

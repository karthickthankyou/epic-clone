import React from 'react'
import { render } from '@testing-library/react'
import GamePage from './GamePage'

describe('GamePage Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<GamePage />)
    expect(asFragment()).toMatchSnapshot()
  })
})

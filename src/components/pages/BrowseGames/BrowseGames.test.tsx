import React from 'react'
import { render } from '@testing-library/react'
import BrowseGames from './BrowseGames'

describe('BrowseGames Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<BrowseGames />)
    expect(asFragment()).toMatchSnapshot()
  })
})

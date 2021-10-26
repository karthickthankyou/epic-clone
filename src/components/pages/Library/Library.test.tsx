import React from 'react'
import { render } from '@testing-library/react'
import Library from './Library'

describe('Library Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Library />)
    expect(asFragment()).toMatchSnapshot()
  })
})

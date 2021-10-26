import React from 'react'
import { render } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<NotFound />)
    expect(asFragment()).toMatchSnapshot()
  })
})

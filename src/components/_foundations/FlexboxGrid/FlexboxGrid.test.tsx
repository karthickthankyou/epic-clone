import React from 'react'
import { render } from '@testing-library/react'
import FlexboxGrid from './FlexboxGrid'

describe('FlexboxGrid Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<FlexboxGrid />)
    expect(asFragment()).toMatchSnapshot()
  })
})

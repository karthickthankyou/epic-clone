import React from 'react'
import { render } from '@testing-library/react'
import News from './News'

describe('News Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<News />)
    expect(asFragment()).toMatchSnapshot()
  })
})
